import styled from 'styled-components'

export const Card = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.8rem;

  position: relative;

  width: 22.5rem;
  height: 30.25rem;
  
  border-radius: 1rem;
  box-shadow: 0px 8px 24px -4px rgba(0, 0, 0, 0.25);
  
  background: var(--white);
  
  @media only screen and (max-width: 1168px){ 
    width: 21.625rem;
  }
  @media only screen and (max-width: 680px) {
    width: 20.375rem;
  }
`