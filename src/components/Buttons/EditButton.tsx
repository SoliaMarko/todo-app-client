import {Link} from 'react-router-dom';
import {IconButton} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {routes} from '@/constants/route.constant';
import {EditButtonProps} from '@/interfaces/buttonsInterfaces/editButton.interface';

const EditButton = (props: EditButtonProps) => {
  if (props.link) {
    return (
      <IconButton color="secondary" aria-label="Edit">
        <Link to={`${routes.TASK}/${routes.UPDATE}`} style={{color: 'inherit', textDecoration: 'none'}}>
          <ModeEditIcon />
        </Link>
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
