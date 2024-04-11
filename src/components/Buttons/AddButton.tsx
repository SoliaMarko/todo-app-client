import {NavLink} from 'react-router-dom';
import {Button} from '@mui/material';

const AddButton = ({path}: {path: string}) => {
  return (
    <NavLink to={path}>
      <Button sx={{color: '#4cceac'}} variant="contained">
        Add Task
      </Button>
    </NavLink>
  );
};

export default AddButton;
