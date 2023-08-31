import { styled } from 'styled-components'

export const IssueDetailWrap = styled.section`
  background-color: rgb(235, 235, 235);
  border-radius: 15px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 50px;
  max-width: 1080px;
  margin: 30px auto;
`

export const TitleArea = styled.div`
  display: flex;
`

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`

export const InfoBox = styled.div`
  flex: 1;
  padding: 0 20px;
  width: 700px;
`

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const ContentsArea = styled.div`
  line-height: 30px;
`

export const StyledParagraph = styled.p`
  margin: 0;
  line-height: 25px;

  &.sm {
    font-size: 12px;
  }

  &.md {
    font-size: 15px;
    line-height: 18px;
    min-width: 100px;
    line-height: 50px;
  }

  &.lg {
    font-size: 30px;
    line-height: 40px;
    font-weight: 900;
  }
`
