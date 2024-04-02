import {PriorityOption} from './priority.interface';

export interface SelectInputProps {
  options: Array<PriorityOption>;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any;
  cols: number;
}

export interface TextInputProps {
  type?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any;
  cols: number;
}
