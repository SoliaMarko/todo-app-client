import {useTheme} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {themeColors} from '@/theme';

const ArrowBackButton = ({path}: {path: string}) => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);

  return (
    <NavLink to={path} style={({isActive}) => ({color: isActive ? colors.redAccent[500] : colors.greenAccent[300]})}>
      <IconButton>
        <ArrowBackIcon />
      </IconButton>
    </NavLink>
  );
};

export default ArrowBackButton;
