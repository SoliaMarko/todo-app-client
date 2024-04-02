import {PriorityOption} from './priority.interface';

export interface TaskFieldProps {
  type?: string;
  options?: Array<PriorityOption>;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any;
  cols: number;
}
