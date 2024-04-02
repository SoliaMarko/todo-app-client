import {Button} from '@mui/material';
import {SubmitButtonProps} from '@/interfaces/globalInterfaces/submitButton.interface';

const SubmitButton = ({handleSubmit, action}: SubmitButtonProps) => {
  return (
    <Button type="submit" color="secondary" variant="contained" onClick={handleSubmit}>
      {action}
    </Button>
  );
};

export default SubmitButton;
