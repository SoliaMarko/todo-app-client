import {FormProps} from 'react-router-dom';
import {PriorityOption} from '../optionsInterfaces/priority.interface';
import {FormikProps} from 'formik';

export interface SelectInputProps<T> extends FormProps {
  options: Array<PriorityOption>;
  name: string;
  cols: number;
  props: FormikProps<T>;
  isRequired?: boolean;
}

export interface TextInputProps<T> extends FormProps {
  type?: string;
  name: string;
  props: FormikProps<T>;
  cols: number;
  isRequired?: boolean;
}
