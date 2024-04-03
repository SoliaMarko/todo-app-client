import {Status} from '@/enums/status.enum';
import {StatusOption} from '@/interfaces/optionsInterfaces/status.interface';

export const statusOptions: StatusOption[] = [
  {value: Status.NotStarted, label: 'Not started', color: '#db4f4a'},
  {value: Status.InProgress, label: 'In progress', color: '#4cceac'},
  {value: Status.Finished, label: 'Finished', color: '#ffff00'}
];
