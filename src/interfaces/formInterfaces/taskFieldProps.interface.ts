import {PriorityOption} from '../optionsInterfaces/priority.interface';

export interface SelectInputProps {
  options: Array<PriorityOption>;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any;
  cols: number;
  isRequired: boolean;
}

export interface TextInputProps {
  type?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any;
  cols: number;
  isRequired: boolean;
}
