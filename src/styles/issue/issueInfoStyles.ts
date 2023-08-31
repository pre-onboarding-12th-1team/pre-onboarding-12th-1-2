import { styled } from 'styled-components'

export const StyledDetail = styled.div`
  flex-grow: 1;
  padding: 0.4rem 0.8rem;
  border-bottom: 1px solid black;
  & > p {
    margin: 0.4rem;
  }
  & > :first-child {
    font-weight: bold;
    font-size: 1.2rem;
  }
`

export const StyledComments = styled.div`
  flex: 0 0 6rem;
  display: inline-block;
  border-bottom: 1px solid black;
  align-self: stretch;
  display: flex;
  align-items: center;
`
