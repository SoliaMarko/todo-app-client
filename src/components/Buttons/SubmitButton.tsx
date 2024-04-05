import {Button} from '@mui/material';
import {SubmitButtonProps} from '@/interfaces/globalInterfaces/submitButton.interface';

const SubmitButton = ({handleSubmit, title}: SubmitButtonProps) => {
  return (
    <Button type="submit" color="secondary" variant="contained" onClick={handleSubmit} title={title}>
      {title}
    </Button>
  );
};

export default SubmitButton;
