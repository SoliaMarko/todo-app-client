import {createBrowserRouter} from 'react-router-dom';
import Overview from './pages/Overview';
import CreateTask from './pages/CreateTask';
import UpdateTask from './pages/UpdateTask';
import Error from './components/Error';
import {routes} from './constants/global.constant';
import AppLayout from './pages/AppLayout';

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    element: <AppLayout />,
    children: [
      {
        path: routes.ROOT,
        element: <Overview />
      },
      {
        path: `${routes.TASK}/${routes.CREATE}`,
        element: <CreateTask />
      },
      {
        path: `${routes.TASK}/${routes.UPDATE}`,
        element: <UpdateTask />
      }
    ]
  }
]);

export default router;
