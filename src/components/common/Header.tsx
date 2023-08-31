import { OWNER, REPO } from 'constants/github'
import { HeaderCenter, StyledLink, StyledSpan } from 'styles/headerStyles'

const Header = () => (
  <HeaderCenter>
    <StyledLink to="/">
      <StyledSpan>{OWNER}</StyledSpan>
      <StyledSpan>{REPO}</StyledSpan>
    </StyledLink>
  </HeaderCenter>
)
export default Header
