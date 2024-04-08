import {createBrowserRouter} from 'react-router-dom';
import Overview from './pages/Overview';
import CreateTask from './pages/CreateTask';
import UpdateTask from './pages/UpdateTask';
import Error from './features/Error';
import {routes} from './constants/global.constant';
import AppLayout from './pages/AppLayout';
// import {loader as allTasksLoader} from './services/getAllTasks.service';

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    element: <AppLayout />,
    children: [
      {
        path: routes.ROOT,
        element: <Overview />
        // loader: allTasksLoader
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
