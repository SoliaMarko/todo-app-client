import {NavLink} from 'react-router-dom';
import {IconButton} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {routes} from '@/constants/route.constant';

const EditButton = () => {
  return (
    <NavLink to={`${routes.TASK}/${routes.UPDATE}`} style={{color: 'inherit', textDecoration: 'none'}}>
      <IconButton color="secondary" aria-label="Edit">
        <ModeEditIcon />
      </IconButton>
    </NavLink>
  );
};

export default EditButton;
