import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const HeaderCenter = styled.header`
  height: 5rem;
  background-color: white;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  flex-direction: row;
  position: sticky;
  top: 0;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledSpan = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  &:first-of-type:after {
    content: '/';
    margin: 0 0.5rem;
  }
`
