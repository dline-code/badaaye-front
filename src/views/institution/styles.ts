import styled from 'styled-components'

export const SlideshowDots = styled.div`
  text-align: center;

  .slideshowDot {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;

    cursor: pointer;
    margin: 15px 7px 0px;

    background-color: #c4c4c4;
  }

  .slideshowDot.active {
    background-color: #6a0dad;
  }
`
