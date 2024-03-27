import {ColorModeContext} from './client/theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import Topbar from './client/components/ThemeToggler';
import {Routes, Route} from 'react-router-dom';
import Overview from './client/pages/Overview';
import CreateTask from './client/pages/CreateTask';
import UpdateTask from './client/pages/UpdateTask';
import {useMode} from './client/hooks/useMode';
import {CREATE_TASK_ROUTE, ROOT_ROUTE, UPDATE_TASK_ROUTE} from './constants/route.constant';
import './App.css';

function App() {
  const {theme, colorMode} = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              <Route path={ROOT_ROUTE} element={<Overview />} />
              <Route path={CREATE_TASK_ROUTE} element={<CreateTask />} />
              <Route path={UPDATE_TASK_ROUTE} element={<UpdateTask />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
