import github from 'apis/github'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { styled } from 'styled-components'
import { Issue } from 'types/issue'
import { dateStringFormater } from 'utils/format'

const IssueDetailPage = () => {
  const [issue, setIssue] = useState<Issue>()
  const { id } = useParams()

  const fetchIssueData = async () => {
    try {
      const response = await github.getIssue(Number(id))
      setIssue(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchIssueData()
  }, [])

  console.log(issue)

  return (
    <IssueDetailWrap>
      <TitleArea>
        {issue && issue.user && (
          <StyledImage alt="user_avatar" src={issue.user.avatar_url} />
        )}
        <InfoBox>
          <StyledParagraph className="lg">
            #{issue && issue.number} {issue && issue.title}
          </StyledParagraph>
          <StyledParagraph className="md">
            작성자 : {issue && issue.user && issue.user.login}, 작성일 :
            {issue && dateStringFormater(issue.created_at)}
            {issue && issue.closed_at}
          </StyledParagraph>
        </InfoBox>
        <CommentBox>
          <StyledParagraph className="md">
            코멘트: {issue && issue.comments}
          </StyledParagraph>
        </CommentBox>
      </TitleArea>
      <hr />
      <ContentsArea>
        {issue && issue.body && (
          <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown>
        )}
      </ContentsArea>
    </IssueDetailWrap>
  )
}
export default IssueDetailPage

const IssueDetailWrap = styled.section`
  background-color: rgb(235, 235, 235);
  border-radius: 15px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 50px;
  width: 1080px;
  margin: 30px auto;
`

const TitleArea = styled.div`
  display: flex;
`

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`

const InfoBox = styled.div`
  flex: 1;
  padding: 0 20px;
  width: 700px;
`

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const ContentsArea = styled.div`
  line-height: 30px;
`

const StyledParagraph = styled.p`
  margin: 0;
  line-height: 25px;

  &.sm {
    font-size: 12px;
    /* color: #dccff0; */
  }

  &.md {
    font-size: 15px;
    line-height: 18px;
    min-width: 100px;
    /* color: white; */
    line-height: 50px;
  }

  &.lg {
    font-size: 30px;
    line-height: 40px;
    font-weight: 900;
    /* color: white; */
  }
`
