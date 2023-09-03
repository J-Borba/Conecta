import styled from 'styled-components'

export const LataQuatroMobileContainer = styled.div `
  display: none;

  @media only screen and (max-width: 680px) {
    display: block;
    position: relative;
    transform: translateY(-25%);
  }
`