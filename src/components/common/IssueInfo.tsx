import { StyledComments, StyledDetail } from 'styles/issue/issueInfoStyles'
import type { Issue } from 'types/issue'
import { dateStringFormater } from 'utils/format'

interface Props {
  issue: Issue
}

const IssueInfo = ({ issue }: Props) => (
  <>
    <StyledDetail>
      <p>{`#${issue.number} ${issue.title}`}</p>
      <p>{`작성자: ${issue.user?.login}, 작성일 : ${dateStringFormater(
        issue.created_at,
      )}`}</p>
    </StyledDetail>
    <StyledComments>{`코멘트: ${issue.comments}`}</StyledComments>
  </>
)

export default IssueInfo
