import {NavLink} from 'react-router-dom';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import {routes} from '@/constants/global.constant';
import {themeColors} from '@/theme';

const Error = ({children}: {children?: string}) => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);

  return (
    <Box>
      <Typography>Whoops, something went wrong</Typography>
      {children ? <Typography>{children}</Typography> : ''}
      <NavLink to={routes.ROOT} style={({isActive}) => ({color: isActive ? colors.redAccent[500] : colors.greenAccent[300]})}>
        <IconButton>
          <HomeIcon />
        </IconButton>
      </NavLink>
    </Box>
  );
};

export default Error;
