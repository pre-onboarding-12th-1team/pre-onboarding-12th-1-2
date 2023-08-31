import Advertisement from 'components/common/Advertisement'
import IssueInfo from 'components/common/IssueInfo'
import LoadingSpinner from 'components/common/LoadingSpinner'
import { ITEM_PER_ADS } from 'constants/advertisement'
import useInfiniteScroll from 'hooks/useInfiniteScroll'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchIssues } from 'redux/issueSlice'
import { StyledLink } from 'styles/GlobalStyles'
import { LastElment, List, ListItem } from 'styles/issue/issueListStyles'

const IssueListPage = () => {
  const dispatch = useAppDispatch()
  const { issues, isLoading, error } = useAppSelector((state) => state.issues)
  const { containerRef, lastElRef } = useInfiniteScroll<HTMLUListElement, HTMLLIElement>(
    () => !isLoading && !error && dispatch(fetchIssues()),
  )

  return (
    <List ref={containerRef}>
      {issues?.map((issue, index) => (
        <ListItem key={issue.node_id}>
          <StyledLink to={`/detail/${issue.number}`}>
            <IssueInfo issue={issue} />
          </StyledLink>
          {(index + 1) % ITEM_PER_ADS === 0 && (
            <Advertisement index={Math.ceil(index / ITEM_PER_ADS)} />
          )}
        </ListItem>
      ))}
      <LastElment ref={lastElRef}>{isLoading && <LoadingSpinner />}</LastElment>
    </List>
  )
}

export default IssueListPage
