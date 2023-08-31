import App from 'App'
import Error from 'components/error/Error'
import IssueDetailPage from 'pages/IssueDetailPage'
import IssueListPage from 'pages/IssueListPage'
import NotFoundPage from 'pages/NotFoundPage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <IssueListPage />,
        errorElement: <Error />,
      },
      {
        path: '/detail/:id',
        element: <IssueDetailPage />,
        errorElement: <Error />,
      },
    ],
  },
])

export default router
