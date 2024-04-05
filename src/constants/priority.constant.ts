import {Priority} from '@/enums/priority.enum';
import {PriorityOption} from '@/interfaces/optionsInterfaces/priority.interface';

export const priorityOptions: PriorityOption[] = [
  {value: Priority.Low, label: 'Low'},
  {value: Priority.Medium, label: 'Medium'},
  {value: Priority.High, label: 'High'},
  {value: Priority.Critical, label: 'Critical'}
];
