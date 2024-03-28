import {Link} from 'react-router-dom';
import {Box, IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Form from '../components/Form';
import {TaskAction} from '../enums/taskAction.enum';

const UpdateTask = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="flex-start">
        <IconButton>
          <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
            <ArrowBackIcon />
          </Link>
        </IconButton>
      </Box>
      <Form action={TaskAction.UPDATE} />
    </Box>
  );
};

export default UpdateTask;
