import {TaskRow} from '../globalInterfaces/taskRow.interface';

export interface SubmitButtonProps {
  title: string;
  handleSubmit: (task: TaskRow) => void;
}
