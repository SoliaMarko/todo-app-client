import dayjs from 'dayjs';
import getTodayDate from '@/utils/getTodayDate';

export class TaskFormModel {
  public task: string = '';
  public priority: number = 1;
  public deadline: string = dayjs(getTodayDate()).toString();
  public tags: number[] = [];
}
