import {Priority} from '@/enums/optionsEnums/priority.enum';
import {Status} from '@/enums/optionsEnums/status.enum';
import {Tags} from '@/enums/optionsEnums/tags.enum';

export interface TaskData {
  _id: number;
  task: string;
  status: Status;
  priority: Priority;
  deadline: string;
  tags: Tags[];
}
