import {FormProps} from 'react-router-dom';
import {PriorityOption} from '../optionsInterfaces/priority.interface';
import {FormikProps} from 'formik';
import {TaskFormModel} from '@/models/taskForm.model';

export interface SelectInputProps extends FormProps {
  options: Array<PriorityOption>;
  name: string;
  cols: number;
  props: FormikProps<TaskFormModel>;
}

export interface TextInputProps extends FormProps {
  type?: string;
  name: string;
  props: FormikProps<TaskFormModel>;
  cols: number;
}
