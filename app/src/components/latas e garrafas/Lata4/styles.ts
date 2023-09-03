import styled from 'styled-components'

export const LataQuatroContainer = styled.div `
  position: absolute;
  z-index: -1;
  left: 18rem;
  bottom: 0;
  transform: translateY(30%);

  @media only screen and (max-width: 1168px) {
    left: 3rem;
  }
  @media only screen and (max-width: 680px) {
    display: none;
  }
`