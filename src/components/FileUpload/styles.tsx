import styled from 'styled-components'

export const FileUploadContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.xxxxmultipleeight} 0;

  strong {
    display: inline-block;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }

  & > label {
    display: flex;
    height: ${({ theme }) => theme.spacings.xmultipleeight};
    border: ${({ theme }) => theme.border.solid(theme.colors.tertiary.gray)};
    border-radius: 0.3rem;
    overflow: hidden;
    cursor: pointer;

    input {
      height: 100%;
      line-height: ${({ theme }) => theme.spacings.xmultipleeight};
      padding-left: ${({ theme }) => theme.spacings.xxxmultipleeight};
      flex: 1;
      color: ${({ theme }) => theme.colors.tertiary.xxcinza};

      &[type='file']::file-selector-button {
        display: none;
      }
    }

    span {
      display: inline-block;
      height: 100%;
      padding: 0 2rem;
      line-height: ${({ theme }) => theme.spacings.xmultipleeight};
      background: ${({ theme }) => theme.colors.primary.xblue};
      color: ${({ theme }) => theme.colors.tertiary.white};
    }
  }

  label + span {
    color: red;
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
  }
`

export const FileUploadWithPreviewContainer = styled.label<{
  dragActive: boolean
}>`
  position: relative;
  display: flex;
  gap: 0.62rem;
  flex-direction: column;
  align-items: center;
  height: 200px;
  padding: 0.62rem;
  border-radius: 0.62rem;
  border: 2px dashed ${({ theme }) => theme.colors.tertiary.gray};
  color: ${({ theme }) => theme.colors.shades.black(0.5)};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background: ${({ theme }) => theme.colors.tertiary.xwhite};
    border-color: ${({ theme }) => theme.colors.primary.xblue};
    span {
      color: ${({ theme }) => theme.colors.secondary.xxxblue};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.primary.xblue};
    font-size: ${({ theme }) => theme.font.sizes.midle};
    font-weight: bold;
    text-align: center;
    transition: ${({ theme }) => theme.transition.default};
  }

  input[type='file'] {
    width: 0px;
    height: 0px;
    opacity: 0;
  }

  input[type='file']::file-selector-button {
    border: none;
    cursor: pointer;
  }
`

export const Preview = styled.div`
  width: 20rem;
  height: 15rem;
  margin: 0 2.5rem;
  overflow: hidden;
  box-shadow: 0 0 10px #f5f4f4;
`
