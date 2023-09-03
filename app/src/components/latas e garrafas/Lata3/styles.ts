import styled from 'styled-components'

export const LataTresContainer = styled.div `
  position: absolute;
  left: 12.8rem;
  top: 0;
  transform: translatey(-35%);

  @media only screen and (max-width: 1168px) {
    left: 0.5rem;
  }
  @media only screen and (max-width: 680px) {
    display: none;
  }
`