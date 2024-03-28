import {useState, useMemo} from 'react';
import {createTheme} from '@mui/material';
import {themeSettings} from '../theme';

export const useMode = () => {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return {theme, colorMode};
};
