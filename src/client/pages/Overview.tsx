import {Box, IconButton} from '@mui/material';
import {Link} from 'react-router-dom';
import Table from '../components/Table';
import AddIcon from '@mui/icons-material/Add';
import Filter from '../components/Filter';

const Overview = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="flex-start">
        <Filter />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <IconButton>
          <Link to="/new" style={{color: 'inherit', textDecoration: 'none'}}>
            <AddIcon />
          </Link>
        </IconButton>
      </Box>
      <Table />
    </Box>
  );
};

export default Overview;
