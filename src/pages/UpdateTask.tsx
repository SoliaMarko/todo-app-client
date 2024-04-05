import {Box} from '@mui/material';
import TasksForm from '@/components/TasksForm/TasksForm';
import {TaskAction} from '@/enums/taskAction.enum';
import ArrowBackButton from '@/components/Buttons/ArrowBackButton';
import {routes} from '@/constants/route.constant';

const UpdateTask = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="flex-start">
        <ArrowBackButton path={routes.ROOT} />
      </Box>
      <TasksForm action={TaskAction.UPDATE} />
    </Box>
  );
};

export default UpdateTask;
