import { useEffect, useMemo, useRef } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchIssues } from 'redux/issueSlice'

const useInfiniteScroll = () => {
  const dispatch = useAppDispatch()
  const { currentPage, issues, isLoading } = useAppSelector((state) => state.issues)
  const containerRef = useRef<HTMLUListElement>(null)
  const lastElRef = useRef<HTMLLIElement>(null)

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) dispatch(fetchIssues())
        },
        {
          root: containerRef.current,
        },
      ),
    [dispatch],
  )

  useEffect(() => {
    if (lastElRef.current) observer.observe(lastElRef.current)
    return () => observer.disconnect()
  }, [currentPage, dispatch, observer])

  return { containerRef, lastElRef, issues, isLoading }
}

export default useInfiniteScroll
