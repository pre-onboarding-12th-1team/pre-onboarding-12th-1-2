import { SPONSERS } from 'constants/advertisement'
import { StyledLink } from 'styles/AdvertisementStyles'

interface Props {
  index: number
}
const Advertisement = ({ index }: Props) => {
  const sponser = SPONSERS[index % SPONSERS.length]
  return (
    <StyledLink to={sponser.url}>
      <img alt={sponser.alt} src={sponser.img} />
    </StyledLink>
  )
}

export default Advertisement
