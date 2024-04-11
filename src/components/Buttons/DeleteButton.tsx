import {useDispatch} from 'react-redux';
import {IconButton} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {TaskRow} from '@/interfaces/globalInterfaces/taskRow.interface';
import {confirmQuestions} from '@/constants/confirmQuestions.constant';
import {setConfirmation} from '@/store/slices/confirmationSlice';

const DeleteButton = ({task}: {task: TaskRow}) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (): void => {
    dispatch(
      setConfirmation({
        confirmInfo: confirmQuestions.deleteTask,
        isOpen: true,
        id: task._id
      })
    );
  };

  return (
    <IconButton color="error" aria-label="Delete" onClick={handleDeleteTask}>
      <DeleteForeverIcon />
    </IconButton>
  );
};

export default DeleteButton;
