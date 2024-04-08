import {NavLink} from 'react-router-dom';
import {IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArrowBackButton = ({path}: {path: string}) => {
  return (
    <NavLink to={path}>
      <IconButton>
        <ArrowBackIcon />
      </IconButton>
    </NavLink>
  );
};

export default ArrowBackButton;
