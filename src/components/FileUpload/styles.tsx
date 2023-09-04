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

export const FileUploadWithPreviewContainer = styled.div<{
  dragActive: boolean
}>`
  padding: ${({ theme }) => theme.spacings.xxxxmultipleeight} 0;

  strong {
    display: inline-block;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }

  > label {
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacings.xxxxmultipleeight};
    background: ${({ theme }) => theme.colors.tertiary.xwhite};
    border: 4px dotted ${({ theme }) => theme.colors.tertiary.xcinza};
    border-radius: 0.5rem;
    cursor: pointer;

    span {
      width: 19rem;
      text-align: center;
    }
  }

  span.error {
    color: red;
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
  }
`

export const Preview = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.tertiary.white};
  border: ${({ theme }) => theme.border.solid(theme.colors.tertiary.gray)};
  border-radius: 0.3rem;
  box-shadow: 0 0 10px #f5f4f4;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  button {
    position: absolute;
    bottom: -300px;
    right: 10px;
    padding: 0.62rem;
    border: none;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.tertiary.white};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.tertiary.gray};
    transition: ${({ theme }) => theme.transition.default};
  }

  &:hover button {
    bottom: 10px;
  }
`
