import {NavLink} from 'react-router-dom';
import {Button} from '@mui/material';

const AddButton = ({path}: {path: string}) => {
  return (
    <NavLink to={path}>
      <Button sx={{color: '#eefc5e'}} variant="contained">
        Add Task
      </Button>
    </NavLink>
  );
};

export default AddButton;
