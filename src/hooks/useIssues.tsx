import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchIssues, toNextPage } from 'redux/issueSlice'
import type { Issues } from 'types/issue'

const useIssues = (): [Issues, VoidFunction, boolean] => {
  const dispatch = useAppDispatch()
  const { issues, currentPage, loadingState } = useAppSelector((state) => state.issues)

  const moveToNextPage = useCallback(() => {
    dispatch(toNextPage())
  }, [dispatch])

  useEffect(() => {
    if (loadingState === 'notLoaded') dispatch(fetchIssues(currentPage))
  }, [currentPage, dispatch, loadingState])

  return [issues, moveToNextPage, loadingState === 'loading']
}

export default useIssues
