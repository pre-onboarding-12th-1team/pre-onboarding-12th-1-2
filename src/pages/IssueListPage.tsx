import Advertisement from 'components/common/Advertisement'
import IssueInfo from 'components/common/IssueInfo'
import SpinnerBubble from 'components/common/SpinnerBubble'
import { ITEM_PER_ADS } from 'constants/github'
import useInfiniteScroll from 'hooks/useInfiniteScroll'
import { StyledLink } from 'styles/GlobalStyles'
import { LastElment, List, ListItem } from 'styles/issue/issueListStyles'

const IssueListPage = () => {
  const { containerRef, lastElRef, issues, isLoading } = useInfiniteScroll()

  return (
    <List ref={containerRef}>
      {issues?.map((issue, index) => (
        <ListItem key={issue.node_id}>
          <StyledLink to={`${issue.number}`}>
            <IssueInfo issue={issue} />
          </StyledLink>
          {(index + 1) % ITEM_PER_ADS === 0 && (
            <Advertisement index={Math.ceil(index / ITEM_PER_ADS)} />
          )}
        </ListItem>
      ))}
      <LastElment ref={lastElRef}>{isLoading && <SpinnerBubble />}</LastElment>
    </List>
  )
}

export default IssueListPage
