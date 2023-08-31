import Advertisement from 'components/common/Advertisement'
import IssueInfo from 'components/common/IssueInfo'
import { ITEM_PER_ADS } from 'constants/github'
import { FC, Fragment } from 'react'
import { StyledLink, Wrapper } from 'styles/GlobalStyles'
import { Issues } from 'types/issue'

interface IssueListPageProps {
  issues?: Issues
}

const IssueListPage: FC<IssueListPageProps> = ({ issues }) => (
  <Wrapper>
    {issues?.map((issue, index) => (
      <Fragment key={issue.node_id}>
        <StyledLink to={`${issue.number}`}>
          <IssueInfo issue={issue} />
        </StyledLink>
        {(index + 1) % ITEM_PER_ADS === 0 ? (
          <Advertisement index={Math.ceil(index / ITEM_PER_ADS)} />
        ) : null}
      </Fragment>
    ))}
  </Wrapper>
)

export default IssueListPage
