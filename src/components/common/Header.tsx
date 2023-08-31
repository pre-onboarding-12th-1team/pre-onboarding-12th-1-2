import { HeaderCenter, StyledLink, StyledSpan } from 'styles/headerStyles'

const Header = () => (
  //TODO: OWNER, REPOSITORY 변수로 바꿔주기
  <HeaderCenter>
    <StyledLink to="/">
      <StyledSpan>&apos;OWNER&apos;</StyledSpan>
      <StyledSpan>&apos;REPOSITRY&apos;</StyledSpan>
    </StyledLink>
  </HeaderCenter>
)
export default Header
