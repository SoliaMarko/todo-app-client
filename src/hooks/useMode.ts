import {useState, useMemo} from 'react';
import {createTheme} from '@mui/material';
import {themeSettings} from '@/theme';

export const useMode = () => {
  const toggleColorMode = (): void => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  const colorMode = useMemo(() => ({toggleColorMode}), []);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return {theme, colorMode};
};
