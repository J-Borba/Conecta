import styled from 'styled-components'

export const MyFooter = styled.footer `
  display: grid;
  padding: 0 10rem;
  grid-template-areas: 
    "left right"
    "bottom bottom";

  grid-template-columns: 50% 50%;
  position: relative;
  background-color: var(--black-100);
  min-height: 100svh;

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

  @media only screen and (max-width: 1168px) {
    grid-template-areas:
      "left"
      "right"
      "bottom";
    grid-template-columns: 100%;
    gap: 2rem;
    padding: 5rem;
  }
`