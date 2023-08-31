import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Wrapper } from 'styles/errorStyles'

const Error = () => {
  const error = useRouteError()

  return (
    <Wrapper>
      <h2>⚠️ Error ⚠️</h2>
      <p>알 수 없는 오류가 발생했습니다.</p>
      <p>오류 파악 및 해결을 위해 버그 제보 부탁드립니다</p>
      <code>{isRouteErrorResponse(error) && JSON.stringify(error)}</code>
    </Wrapper>
  )
}

export default Error
