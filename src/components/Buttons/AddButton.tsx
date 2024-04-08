import {NavLink} from 'react-router-dom';
import {IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddButton = ({path}: {path: string}) => {
  return (
    <NavLink to={path}>
      <IconButton>
        <AddIcon />
      </IconButton>
    </NavLink>
  );
};

export default AddButton;
