import {Box, Typography} from '@mui/material';
import Table from '@/components/Table/Table';
import AddButton from '@/components/Buttons/AddButton';
import Error from '../features/Error';
import Loader from '@/features/Loader';
import Filter from '@/features/Filter/Filter';
import {routes} from '@/constants/global.constant';
import {useGetAllTasksQuery} from '@/store';

const Overview = () => {
  const {data, error, isLoading} = useGetAllTasksQuery();
  const tasks = data?.data || [];

  if (error) {
    return <Error />;
  }
  if (isLoading) {
    return <Loader />;
  }
  if (Object.keys(tasks).length > 0) {
    return (
      <Box>
        <Box display="flex" justifyContent="flex-start">
          <Filter />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <AddButton path={`${routes.TASK}/${routes.CREATE}`} />
        </Box>
        <Table tasks={tasks} />
      </Box>
    );
  }

  return <Typography>The tasks list is empty. Press + button to add your first task 📝</Typography>;
};

export default Overview;
