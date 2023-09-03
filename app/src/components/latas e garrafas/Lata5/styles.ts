import styled from 'styled-components'

export const LataCincoContainer = styled.div `
  position: absolute;
  right: 10rem;
  bottom: 0;
  transform: translate(-50%, 25%);
  z-index: -1;

  @media only screen and (max-width: 1168px) {
    img {
      max-width: 100%;
    }
    right: 0;
    top: 0;
    transform: translate(-15%, -10%);
  }

  @media only screen and (max-width: 680px) {
    display: none;
  }
`