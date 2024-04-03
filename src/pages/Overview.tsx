import {Box} from '@mui/material';
import Table from '@/components/Table/Table';
import Filter from '@/components/Filter/Filter';
import AddButton from '@/components/Buttons/AddButton';
import {routes} from '@/constants/route.constant';

const Overview = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="flex-start">
        <Filter />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <AddButton path={`${routes.TASK}/${routes.CREATE}`} />
      </Box>
      <Table />
    </Box>
  );
};

export default Overview;
