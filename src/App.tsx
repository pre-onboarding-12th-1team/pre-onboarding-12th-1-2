import Header from 'components/common/Header'
import { Outlet } from 'react-router-dom'

const App = () => (
  <>
    <Header />
    <Outlet />
  </>
)

export default App
