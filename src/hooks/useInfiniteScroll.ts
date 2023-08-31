import { useEffect, useMemo, useRef } from 'react'
import { useAppDispatch } from 'redux/hooks'

const useInfiniteScroll = <C extends HTMLElement, L extends HTMLElement>(
  onIntersect: VoidFunction,
) => {
  const containerRef = useRef<C>(null)
  const lastElRef = useRef<L>(null)
  const dispatch = useAppDispatch()

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) onIntersect()
        },
        {
          root: containerRef.current,
        },
      ),
    [onIntersect],
  )

  useEffect(() => {
    if (lastElRef.current) observer.observe(lastElRef.current)
    return () => observer.disconnect()
  }, [dispatch, observer])

  return { containerRef, lastElRef }
}

export default useInfiniteScroll
