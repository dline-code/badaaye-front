import { InputContainerProps } from './type'
import * as S from './styles'
import { DragEvent, useRef, useState } from 'react'

interface FileObject {
  name: string
  size: number
  type: string
}

export function FileUpload({
  midiaType,
  label,
  name,
  id,
  ...rest
}: InputContainerProps) {
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

  return (
    <S.FileUploadContainer
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
        name={name}
        accept="image/*"
        {...rest}
        required
      />
      <S.Preview></S.Preview>
    </S.FileUploadContainer>
  )
}
