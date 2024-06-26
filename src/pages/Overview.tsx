import {Box, Typography} from '@mui/material';
import Table from '@/components/Table/Table';
import AddButton from '@/components/Buttons/AddButton';
import Stats from '@/features/Stats/Stats';
import Error from '../components/Error';
import Loader from '@/components/Loader';
import Filter from '@/components/Filter/Filter';
import {routes} from '@/constants/global.constant';
import {useGetAllTasksQuery} from '@/store';
import {getFormattedData} from '@/utils/getFormattedData';
import ConfirmationDialog from '@/features/ConfirmDialog/ConfirmDialog';
import LegendsList from '@/features/LegendsList';

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
  return (
    <Box>
      <ConfirmationDialog />
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{mt: 2, mb: 4}}>
        <Stats tasks={formattedTasks} />
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <LegendsList />
          <AddButton path={`${routes.TASK}/${routes.CREATE}`} />
        </Box>
      </Box>

      {Object.keys(tasks).length > 0 ? (
        <>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Filter />
          </Box>
          <Table tasks={formattedTasks} />
        </>
      ) : (
        <Typography sx={{fontSize: '28px'}}>The tasks list is empty. Press "Add Task" button to add your first task 📝</Typography>
      )}
    </Box>
  );
};

export default Overview;
