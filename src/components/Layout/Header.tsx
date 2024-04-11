import {useState} from 'react';
import {Box, Button} from '@mui/material';
import ThemeToggleButton from '../Buttons/ThemeToggleButton';
import {useTheme} from '@mui/material/styles';
import {themeColors} from '@/theme';
import logoLight from '../../../public/assets/light-logo.svg';
import logoDark from '../../../public/assets/dark-logo.svg';
import logoLightToggled from '../../../public/assets/light-logo-ua.svg';
import logoDarkToggled from '../../../public/assets/dark-logo-ua.svg';

const Header = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);
  const [currentLogo, setCurrentLogo] = useState(theme.palette.mode === 'dark' ? logoLight : logoDark);

  const toggleLogo = () => {
    if (currentLogo === logoLight) {
      setCurrentLogo(logoLightToggled);
      return;
    }
    if (currentLogo === logoLightToggled) {
      setCurrentLogo(logoLight);
      return;
    }
    if (currentLogo === logoDark) {
      setCurrentLogo(logoDarkToggled);
      return;
    }
    setCurrentLogo(logoDark);
  };

  return (
    <header style={{backgroundColor: theme.palette.mode === 'dark' ? colors.primary[800] : colors.greenAccent[800]}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, maxWidth: '1480px', margin: '0 auto'}}>
        <Button onClick={toggleLogo}>
          <img src={currentLogo} alt="logo" style={{maxHeight: '40px'}} />
        </Button>
        <ThemeToggleButton />
      </Box>
    </header>
  );
};

export default Header;
