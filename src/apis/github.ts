import octokit from 'configs/octokit'
import { OWNER, REPO } from 'constants/github'
import type { IssueListResponseType, IssueResponse } from 'types/issue'

export default {
  getIssues(currentPage: number): Promise<IssueListResponseType> {
    return octokit.request(
      `GET /repos/{owner}/{repo}/issues?page=${currentPage}&sort=comments`,
      {
        owner: OWNER,
        repo: REPO,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    ) as Promise<IssueListResponseType>
  },
  getIssue(issueNumber: number): Promise<IssueResponse> {
    return octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
      owner: OWNER,
      repo: REPO,
      issue_number: issueNumber,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
  },
}
