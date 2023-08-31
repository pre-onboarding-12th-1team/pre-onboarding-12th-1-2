import { Octokit } from 'octokit'

const instance = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
})

export default instance
