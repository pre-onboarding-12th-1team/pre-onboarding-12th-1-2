import { SerializedError } from '@reduxjs/toolkit'
import NotFound from 'components/error/NotFound'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { StyledCode, Wrapper } from 'styles/errorStyles'

interface Props {
  error?: SerializedError
}

const Error = ({ error }: Props) => {
  const routeError = useRouteError()

  if (error?.message === 'Not Found') {
    return <NotFound />
  }
  return (
    <Wrapper>
      <h2>⚠️ Error ⚠️</h2>
      <p>알 수 없는 오류가 발생했습니다.</p>
      <p>오류 파악 및 해결을 위해 버그 제보 부탁드립니다</p>
      <StyledCode>
        {isRouteErrorResponse(routeError)
          ? JSON.stringify(routeError)
          : JSON.stringify(error)}
      </StyledCode>
    </Wrapper>
  )
}

export default Error
