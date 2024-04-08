import {RouterProvider} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {useMode} from './hooks/useMode';
import router from './router';
import {ColorModeContext} from './theme';
import './App.css';

function App() {
  const {theme, colorMode} = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
