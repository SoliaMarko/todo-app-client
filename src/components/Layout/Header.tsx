import {Box} from '@mui/material';
import ThemeToggleButton from '../Buttons/ThemeToggleButton';
import {useTheme} from '@mui/material/styles';
import {themeColors} from '@/theme';

const Header = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);

  return (
    <header style={{backgroundColor: theme.palette.mode === 'dark' ? colors.primary[800] : colors.greenAccent[800]}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2, maxWidth: '1480px', margin: '0 auto'}}>
        <Box>Logo</Box>
        <ThemeToggleButton />
      </Box>
    </header>
  );
};

export default Header;
