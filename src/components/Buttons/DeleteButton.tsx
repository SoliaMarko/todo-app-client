import {IconButton} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {TaskRow} from '@/interfaces/globalInterfaces/taskRow.interface';
import {useDeleteTaskMutation} from '@/store/apis/tasksApi';

const DeleteButton = ({task}: {task: TaskRow}) => {
  const [deleteTask] = useDeleteTaskMutation();

  const handleDeleteTask = (): void => {
    deleteTask(task);
  };

  return (
    <IconButton color="error" aria-label="Delete" onClick={handleDeleteTask}>
      <DeleteForeverIcon />
    </IconButton>
  );
};

export default DeleteButton;
