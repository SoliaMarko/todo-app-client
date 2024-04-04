import {Status} from '@/enums/optionsEnums/status.enum';
import {StatusOption} from '@/interfaces/optionsInterfaces/status.interface';

export const statusOptions: StatusOption[] = [
  {value: Status.NotStarted, label: 'Not started', color: '#db4f4a'},
  {value: Status.InProgress, label: 'In progress', color: '#ffff00'},
  {value: Status.Finished, label: 'Finished', color: '#4cceac'}
];
