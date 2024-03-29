import {Link} from 'react-router-dom';
import {IconButton} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const renderEditButton = () => {
  return (
    <IconButton color="secondary" aria-label="Edit">
      <Link to="/id" style={{color: 'inherit', textDecoration: 'none'}}>
        <ModeEditIcon />
      </Link>
    </IconButton>
  );
};

export const renderDeleteButton = () => {
  return (
    <IconButton color="error" aria-label="Delete">
      <DeleteForeverIcon />
    </IconButton>
  );
};
