import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  height: 8rem;
  & > img {
    height: 100%;
  }
`
