import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.4rem 2rem 1rem;
  padding: 0.8rem;
  text-decoration: none;
  color: black;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
  }
`
export const List = styled.ul`
  width: 90%;
  height: calc(100vh - 5rem);
  margin: 0 auto;
  overflow: scroll;
  list-style: none;
`

export const ListItem = styled.li``

export const LastElment = styled.li``
