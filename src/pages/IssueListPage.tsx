import Advertisement from 'components/common/Advertisement'
import IssueInfo from 'components/common/IssueInfo'
import SpinnerBubble from 'components/common/SpinnerBubble'
import { ITEM_PER_ADS } from 'constants/github'
import useIssues from 'hooks/useIssues'
import { useEffect, useRef } from 'react'
import { StyledLink } from 'styles/GlobalStyles'
import { LastElment, List, ListItem } from 'styles/issue/issueListStyles'

const IssueListPage = () => {
  const [issues, toNextPage, isLoading] = useIssues()
  const lastElRef = useRef<HTMLLIElement>(null)
  const containerRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) toNextPage()
      },
      {
        root: containerRef.current,
      },
    )

    observer.observe(lastElRef.current!)

    return () => observer.disconnect()
  }, [toNextPage])

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
