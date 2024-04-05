import {Button} from '@mui/material';
import {SubmitButtonProps} from '@/interfaces/globalInterfaces/submitButton.interface';

const SubmitButton = ({handleSubmit, action, title}: SubmitButtonProps) => {
  return (
    <Button type="submit" color="secondary" variant="contained" onClick={handleSubmit} title={title}>
      {action}
    </Button>
  );
};

export default SubmitButton;
