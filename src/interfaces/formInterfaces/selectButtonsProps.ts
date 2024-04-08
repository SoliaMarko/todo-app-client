import {StatusOption} from '../optionsInterfaces/status.interface';
import {TaskRow} from '../globalInterfaces/taskRow.interface';

export interface SelectButtonsProps {
  options: StatusOption[];
  selectedTask: TaskRow;
}
