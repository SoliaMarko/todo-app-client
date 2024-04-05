import {Button} from '@mui/material';
import {SubmitButtonProps} from '@/interfaces/buttonsInterfaces/submitButton.interface';

const SubmitButton = ({handleSubmit, title}: SubmitButtonProps) => {
  return (
    <Button type="submit" color="secondary" variant="contained" onClick={handleSubmit} title={title}>
      {title}
    </Button>
  );
};

export default SubmitButton;
