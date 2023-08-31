import { useEffect } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'
import { fetchDetail } from 'redux/detailSlice'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import remarkGfm from 'remark-gfm'
import {
  ContentsArea,
  InfoBox,
  IssueDetailWrap,
  StyledImage,
  StyledParagraph,
  TitleArea,
} from 'styles/issue/issueDetailStyles'
import { dateStringFormater } from 'utils/format'

const IssueDetailPage = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const { issue } = useAppSelector((state) => state.detail)

  useEffect(() => {
    dispatch(fetchDetail(+id!))
  }, [dispatch, id])

  return (
    <IssueDetailWrap>
      <TitleArea>
        {issue?.user && <StyledImage alt="user_avatar" src={issue.user.avatar_url} />}
        <InfoBox>
          <StyledParagraph className="lg">
            #{issue?.number} {issue?.title}
          </StyledParagraph>
          <StyledParagraph className="md">
            작성자 : {issue?.user?.login}, 작성일 :
            {issue && dateStringFormater(issue.created_at)}
            {issue?.closed_at}
          </StyledParagraph>
        </InfoBox>
        <StyledParagraph className="md">코멘트: {issue?.comments}</StyledParagraph>
      </TitleArea>
      <hr />
      <ContentsArea>
        {issue?.body && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
        )}
      </ContentsArea>
    </IssueDetailWrap>
  )
}
export default IssueDetailPage
