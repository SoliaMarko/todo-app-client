import {TaskAction} from '@/enums/taskAction.enum';
import {TaskRow} from '../globalInterfaces/taskRow.interface';

export interface TaskFormProps {
  title: TaskAction.CREATE | TaskAction.UPDATE;
  taskData: TaskRow | undefined;
}
