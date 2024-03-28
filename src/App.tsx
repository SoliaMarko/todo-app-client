import {Routes, Route} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {ColorModeContext} from './client/theme';
import {useMode} from './client/hooks/useMode';
import ThemeTogglerButton from './client/components/buttons/ThemeToggleButton';
import Overview from './client/pages/Overview';
import CreateTask from './client/pages/CreateTask';
import UpdateTask from './client/pages/UpdateTask';
import {routes} from './constants/route.constant';
import './App.css';

function App() {
  const {theme, colorMode} = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <ThemeTogglerButton />
            <Routes>
              <Route path={routes.ROOT} element={<Overview />} />
              <Route path={routes.CREATE} element={<CreateTask />} />
              <Route path={routes.UPDATE} element={<UpdateTask />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
