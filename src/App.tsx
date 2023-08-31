import Header from 'components/common/Header'
import Error from 'components/error/Error'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

const App = () => {
  const { error: issuesError } = useAppSelector((state) => state.issues)
  const { error: detailError } = useAppSelector((state) => state.detail)
  const error = detailError || issuesError

  return (
    <>
      <Header />
      {error ? <Error error={error} /> : <Outlet />}
    </>
  )
}

export default App
