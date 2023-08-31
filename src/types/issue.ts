import type { Endpoints } from '@octokit/types'

export type IssueListResponseType =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response']

export type IssueResponse =
  Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response']

export type Issues = IssueListResponseType['data']

export type Issue = IssueResponse['data']
