import {Priority} from '@/enums/priority.enum';
import {Status} from '@/enums/status.enum';
import {Tags} from '@/enums/tags.enum';

export interface TaskData {
  _id: number;
  task: string;
  status: Status;
  priority: Priority;
  deadline: string;
  tags: Tags[];
}
