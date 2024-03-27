import {Button} from '@mui/material';

interface SubmitButtonProps {
  handleSubmit: () => void;
  action: string;
}

const SubmitButton = ({handleSubmit, action}: SubmitButtonProps) => {
  return (
    <Button type="submit" color="secondary" variant="contained" onClick={handleSubmit}>
      {action}
    </Button>
  );
};

export default SubmitButton;
