import { InputContainerProps } from './type'
import * as S from './styles'
import { DragEvent, FormEvent, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface FileObject {
  name: string
  size: number
  type: string
}

export function FileUploadWithPreview({
  midiaType,
  label,
  name,
  id,
  ...rest
}: InputContainerProps) {
  const [filePreview, setFilePreview] = useState<
    string | ArrayBuffer | null | undefined
  >(null)
  const [dragActive, setdragActive] = useState(false)
  const fileInput = useRef<HTMLInputElement>(null)

  const handleDropFile = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setdragActive(false)
    if (fileInput.current && event.dataTransfer.files[0]) {
      const fileList = Array.from(event.dataTransfer.files).map(file => file)

      if (fileInput.current) {
        const dataTransfer = new DataTransfer()
        fileList.forEach(file => dataTransfer.items.add(file))
        fileInput.current.files = dataTransfer.files
      }
    }
  }

  function handlePreviewFile(e: FormEvent<HTMLInputElement>) {
    const reader = new FileReader()
    const selectedFile = e.currentTarget.files?.[0]
    if (selectedFile) {
      reader.readAsDataURL(selectedFile)
    }
    reader.onload = readerEvent => {
      setFilePreview(readerEvent.target?.result)
    }
  }

  function clearFiles() {
    setFilePreview(null)
  }

  return (
    <S.FileUploadWithPreviewContainer
      dragActive={dragActive}
      htmlFor={id}
      onDragOver={e => {
        e.preventDefault()
      }}
      onDragEnter={e => setdragActive(true)}
      onDragLeave={e => setdragActive(false)}
      onDrop={handleDropFile}
    >
      <span className="drop-title">Click here to upload</span>
      or
      <input
        ref={fileInput}
        type="file"
        id={id}
        onInput={handlePreviewFile}
        name={name}
        accept={`${
          midiaType == 'pdf' ? 'application/' + midiaType : midiaType + '/*'
        }`}
        {...rest}
        required
        hidden
      />
      <S.Preview>
        {filePreview && midiaType === 'image' && (
          <Image src={`${filePreview}`} alt="image" width={100} height={100} />
        )}

        {filePreview && midiaType === 'pdf' && (
          <embed
            type="application/pdf"
            src={`${filePreview}`}
            width="200"
            height="200"
          />
        )}
      </S.Preview>
    </S.FileUploadWithPreviewContainer>
  )
}

export function FileUpload({
  midiaType,
  label,
  name,
  errorValue,
  ...rest
}: InputContainerProps) {
  return (
    <S.FileUploadContainer>
      <strong>{label}</strong>
      <label htmlFor={name}>
        <input
          type="file"
          id={name}
          name={name}
          accept={`${
            midiaType == 'pdf' ? 'application/' + midiaType : midiaType + '/*'
          }`}
          {...rest}
          required
        />
        <span className="drop-title">Procurar</span>
      </label>
      <span>{errorValue}</span>
    </S.FileUploadContainer>
  )
}
