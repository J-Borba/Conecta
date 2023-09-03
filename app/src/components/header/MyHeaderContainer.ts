import styled from 'styled-components'

export const HeaderContainer = styled.header `
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 8rem;

  div {
    width: 8.4rem;
    display: flex;
    justify-content: center;
    gap: 1.38rem;
  }
  @media only screen and (max-width: 1168px) {
    padding: 1.25rem 1.25rem;
  }
`