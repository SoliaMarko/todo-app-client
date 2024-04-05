import {RouterProvider} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {useMode} from './hooks/useMode';
import ThemeToggleButton from './components/Buttons/ThemeToggleButton';
import {ColorModeContext} from './theme';
import router from './router';
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
            <RouterProvider router={router} />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
