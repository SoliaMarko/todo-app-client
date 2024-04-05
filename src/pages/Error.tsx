import {Box, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {IconButton} from '@mui/material';
import {themeColors} from '@/theme';
import {useTheme} from '@mui/material';
import {routes} from '@/constants/route.constant';
import HomeIcon from '@mui/icons-material/Home';

const Error = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);

  return (
    <Box>
      <Typography>Whoops, something went wrong.</Typography>

      <NavLink to={routes.ROOT} style={({isActive}) => ({color: isActive ? colors.redAccent[500] : colors.greenAccent[300]})}>
        <IconButton>
          <HomeIcon />
        </IconButton>
      </NavLink>
    </Box>
  );
};

export default Error;
