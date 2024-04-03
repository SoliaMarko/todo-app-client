import {Link} from 'react-router-dom';
import {IconButton} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {routes} from '@/constants/route.constant';

const EditButton = () => {
  return (
    <IconButton color="secondary" aria-label="Edit">
      <Link to={`${routes.TASK}/${routes.UPDATE}`} style={{color: 'inherit', textDecoration: 'none'}}>
        <ModeEditIcon />
      </Link>
    </IconButton>
  );
};

export default EditButton;
