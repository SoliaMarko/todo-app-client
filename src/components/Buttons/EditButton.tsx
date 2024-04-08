import {NavLink} from 'react-router-dom';
import {IconButton} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {EditButtonProps} from '@/interfaces/buttonsInterfaces/editButton.interface';

const EditButton = ({link, onClick}: EditButtonProps) => {
  if (link) {
    return (
      <NavLink to={link} style={{color: 'inherit', textDecoration: 'none'}}>
        <IconButton color="secondary" aria-label="Edit">
          <ModeEditIcon />
        </IconButton>
      </NavLink>
    );
  }

  return (
    <IconButton color="secondary" aria-label="Edit" onClick={onClick}>
      <ModeEditIcon />
    </IconButton>
  );
};

export default EditButton;
