import github from 'apis/github'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper } from 'styles/GlobalStyles'
import { Issue } from 'types/issue'

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

  return (
    <Wrapper>
      <div>{issue && issue.id}</div>
    </Wrapper>
  )
}
export default IssueDetailPage
