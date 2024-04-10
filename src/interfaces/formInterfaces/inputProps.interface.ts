import {FormProps} from 'react-router-dom';
import {FormikProps} from 'formik';
import dayjs from 'dayjs';
import {TaskRow} from '../globalInterfaces/taskRow.interface';
import {PriorityOption} from '../optionsInterfaces/priority.interface';

export interface TextInputProps<T> extends FormProps {
  type?: string;
  name: string;
  props: FormikProps<T>;
  cols?: number;
  isRequired?: boolean;
}

export interface SelectInputProps<T> extends FormProps {
  options: Array<PriorityOption>;
  name: string;
  cols?: number;
  props: FormikProps<T>;
  isRequired?: boolean;
}

export interface DateInputProps {
  name: string;
  isRequired?: boolean;
  defaultDate?: dayjs.Dayjs;
  values: TaskRow;
}

export interface MultipleAutocompleteInputProps {
  options: {
    value: number;
    label: string;
  }[];
  name: string;
  cols?: number;
  defaultValue?: number;
  values: TaskRow;
}
