import {IconButton, useTheme} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {NavLink} from 'react-router-dom';
import {themeColors} from '@/theme';

const AddButton = ({path}: {path: string}) => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);

  return (
    <NavLink to={path} style={({isActive}) => ({color: isActive ? colors.redAccent[500] : colors.greenAccent[300]})}>
      <IconButton>
        <AddIcon />
      </IconButton>
    </NavLink>
  );
};

export default AddButton;
