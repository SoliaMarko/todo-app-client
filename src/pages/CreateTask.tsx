import {Box} from '@mui/material';
import TasksForm from '@/components/TasksForm/TasksForm';
import ArrowBackButton from '@/components/Buttons/ArrowBackButton';
import {TaskAction} from '@/enums/taskAction.enum';
import {routes} from '@/constants/route.constant';

const CreateTask = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="flex-start">
        <ArrowBackButton path={routes.ROOT} />
      </Box>
      <TasksForm action={TaskAction.CREATE} />
    </Box>
  );
};

export default CreateTask;
