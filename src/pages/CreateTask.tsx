import {Box} from '@mui/material';
import TasksForm from '@/components/TasksForm/TasksForm';
import ArrowBackButton from '@/components/Buttons/ArrowBackButton';
import {TaskAction} from '@/enums/taskAction.enum';
import {routes} from '@/constants/global.constant';

const CreateTask = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="flex-start">
        <ArrowBackButton path={routes.ROOT} />
      </Box>
      <TasksForm title={TaskAction.CREATE} task={undefined} />
    </Box>
  );
};

export default CreateTask;
