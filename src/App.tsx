import {Routes, Route} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {useMode} from './hooks/useMode';
import ThemeToggleButton from './components/Buttons/ThemeToggleButton';
import Overview from './pages/Overview';
import CreateTask from './pages/CreateTask';
import UpdateTask from './pages/UpdateTask';
import {routes} from './constants/route.constant';
import {ColorModeContext} from './theme';
import './App.css';

function App() {
  const {theme, colorMode} = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <ThemeToggleButton />
            <Routes>
              <Route path={routes.ROOT} element={<Overview />} />
              <Route path={`${routes.TASK}/${routes.CREATE}`} element={<CreateTask />} />
              <Route path={`${routes.TASK}/${routes.UPDATE}`} element={<UpdateTask />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
