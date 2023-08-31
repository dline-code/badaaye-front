import styled from 'styled-components'

export const FileUploadContainer = styled.label<{ dragActive: boolean }>`
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
