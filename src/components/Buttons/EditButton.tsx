import {NavLink} from 'react-router-dom';
import {IconButton} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {routes} from '@/constants/route.constant';
import {EditButtonProps} from '@/interfaces/buttonsInterface/editButton.interface';

const EditButton = (props: EditButtonProps) => {
  if (props.link) {
    return (
      <IconButton color="secondary" aria-label="Edit">
        <NavLink to={`${routes.TASK}/${routes.UPDATE}`} style={{color: 'inherit', textDecoration: 'none'}}>
          <ModeEditIcon />
        </NavLink>
      </IconButton>
    );
  }

  return (
    <IconButton color="secondary" aria-label="Edit" onClick={props.onClick}>
      <ModeEditIcon />
    </IconButton>
  );
};

export default EditButton;
