import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Box } from '@mui/material';
import Form from '../components/Form';

const CreateTask = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="flex-start">
        <IconButton>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ArrowBackIcon />
          </Link>
        </IconButton>
      </Box>
      <Form action="create" />
    </Box>
  );
};

export default CreateTask;
