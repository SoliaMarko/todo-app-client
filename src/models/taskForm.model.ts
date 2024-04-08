import {Priority} from '@/enums/optionsEnums/priority.enum';
import {Status} from '@/enums/optionsEnums/status.enum';
import {Tags} from '@/enums/optionsEnums/tags.enum';
import {getTodayDate} from '@/utils/getFormattedDate';
import {TaskRow} from '@/interfaces/globalInterfaces/taskRow.interface';

export class TaskFormModel implements TaskRow {
  public _id: string = '';
  public task: string = '';
  public status: Status | string = Status.NotStarted;
  public priority: Priority = Priority.Low;
  public deadline: string = `${getTodayDate()}`;
  public tags: Tags[] | [] = [];
}
