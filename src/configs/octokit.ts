import { Octokit } from 'octokit'

export const OWNER = 'facebook'
export const REPO = 'react'

const instance = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
})

export default instance
