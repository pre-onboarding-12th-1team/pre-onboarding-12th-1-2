import App from 'App'
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
        // loader: async ({ params }) => {
        //     return fetch(`/api/teams/${params.teamId}.json`);
        //   },
      },
      {
        path: '/detail/:id',
        element: <IssueDetailPage />,
        // loader: async ({ params }) => {
        //     return fetch(`/api/teams/${params.teamId}.json`);
        //   },
      },
    ],
  },
])

export default router
