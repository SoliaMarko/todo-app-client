import {useSelector, useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {IRootState} from '@/types/IRootState.type';
import {resetConfirmation, setConfirmation} from '@/store/slices/confirmationSlice';
import {useDeleteTaskMutation} from '@/store';

const ConfirmDialog = () => {
  const {confirmInfo, isOpen, id} = useSelector((state: IRootState) => state.confirmation);
  const [deleteTask] = useDeleteTaskMutation();
  const dispatch = useDispatch();
  const {title, content, options, type} = confirmInfo;
  if (!isOpen) return;

  const handleCancel = (): void => {
    dispatch(resetConfirmation());
  };

  const handleConfirm = (): void => {
    dispatch(setConfirmation({isConfirmed: true}));
    deleteTask(id);
    dispatch(resetConfirmation());
    console.log(`task with id ${id} has been successfully deleted`);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleCancel}
        className={type}
        aria-labelledby={`alert-dialog-${title}`}
        aria-describedby={`alert-dialog-${content}`}
      >
        <DialogTitle id={`alert-dialog-${title}`}>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id={`alert-dialog-${content}`}>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>{options.cancel}</Button>
          <Button onClick={handleConfirm} autoFocus>
            {options.confirm}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmDialog;
