import {useContext} from 'react';
import {Box, IconButton, useTheme} from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import {ColorModeContext} from '@/theme';
import {ColorMode} from '@/interfaces/globalInterfaces/theme.interface';

const ThemeToggleButton = () => {
  const theme = useTheme();
  const colorMode: ColorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="flex-start">
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </IconButton>
    </Box>
  );
};

export default ThemeToggleButton;
