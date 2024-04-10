import {Box, Typography} from '@mui/material';
import Table from '@/components/Table/Table';
import AddButton from '@/components/Buttons/AddButton';
import Error from '../features/Error';
import Loader from '@/features/Loader';
import Filter from '@/components/Filter/Filter';
import {routes} from '@/constants/global.constant';
import {useGetAllTasksQuery} from '@/store';
import {getFormattedData} from '@/utils/getFormattedData';

const Overview = () => {
  const {data, error, isLoading} = useGetAllTasksQuery();
  const tasks = data?.data || [];
  const formattedTasks = getFormattedData(tasks);

  if (error) {
    return <Error />;
  }
  if (isLoading) {
    return <Loader />;
  }
  if (Object.keys(tasks).length > 0) {
    return (
      <Box>
        <Box display="flex" justifyContent="flex-start" sx={{mt: 2, mb: 4}}>
          <AddButton path={`${routes.TASK}/${routes.CREATE}`} />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Filter />
        </Box>
        <Table tasks={formattedTasks} />
      </Box>
    );
  }

  return <Typography>The tasks list is empty. Press + button to add your first task 📝</Typography>;
};

export default Overview;
