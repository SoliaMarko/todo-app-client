import {IconButton} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const DeleteButton = () => {
  return (
    <IconButton color="error" aria-label="Delete">
      <DeleteForeverIcon />
    </IconButton>
  );
};

export default DeleteButton;
