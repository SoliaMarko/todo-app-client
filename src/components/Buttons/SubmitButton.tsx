import {Button} from '@mui/material';
import {SubmitButtonProps} from '@/interfaces/buttonsInterfaces/submitButton.interface';

const SubmitButton = ({title}: SubmitButtonProps) => {
  return (
    <Button type="submit" color="secondary" variant="contained" title={title}>
      {title}
    </Button>
  );
};

export default SubmitButton;
