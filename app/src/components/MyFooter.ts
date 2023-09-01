import styled from 'styled-components'

export const MyFooter = styled.footer `
  display: flex;
  position: relative;
  background-color: var(--black-100);
  height: 100svh;

  h3, p, label{
    color: var(--white);
  }
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
  }
  p{
    font-size: 0.75rem;
    font-family: sans-serif;
  }
`