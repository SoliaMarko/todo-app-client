import {Priority} from '@/enums/optionsEnums/priority.enum';
import {Tags} from '@/enums/optionsEnums/tags.enum';
import {Status} from '@/enums/optionsEnums/status.enum';

export interface TaskRow {
  _id: string;
  task: string;
  status: Status | string;
  priority: Priority;
  deadline: string;
  tags: Tags[] | [];
}
