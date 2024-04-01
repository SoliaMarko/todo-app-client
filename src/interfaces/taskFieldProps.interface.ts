import {PriorityOption} from './priority.interface';
import {FormikProps} from 'formik';
import {TaskForm} from './taskForm.interface';

export interface TaskFieldProps {
  type?: string;
  options?: Array<PriorityOption>;
  name: string;
  props: FormikProps<TaskForm>;
  cols: number;
}
