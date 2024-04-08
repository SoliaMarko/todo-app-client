import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import ArrowBackButton from '@/components/Buttons/ArrowBackButton';
import TasksForm from '@/components/TasksForm/TasksForm';
import Error from '@/features/Error';
import Loader from '@/features/Loader';
import {TaskAction} from '@/enums/taskAction.enum';
import {routes} from '@/constants/global.constant';
import {useGetTaskByIdQuery} from '@/store';

const UpdateTask = () => {
  const id = useParams();
  const {data, error, isLoading} = useGetTaskByIdQuery(id);
  const taskData = data?.data;

  if (error) {
    return <Error />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Box display="flex" justifyContent="flex-start">
        <ArrowBackButton path={routes.ROOT} />
      </Box>
      <TasksForm title={TaskAction.UPDATE} taskData={taskData} />
    </Box>
  );
};

export default UpdateTask;
