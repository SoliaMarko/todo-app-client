import {getStatusLabel, getPriorityLabel, getTagLabel} from './getLabel';
import {getStrDateFromISO} from './getFormattedDate';
import {ApiTaskRow} from '@/interfaces/apiTaskRow.interface';
import {FormattedTaskRow} from '@/interfaces/formattedTaskRow.interface';

export const getFormattedData = (data: ApiTaskRow[]): FormattedTaskRow[] =>
  data.map((row: ApiTaskRow) => {
    return {
      _id: row._id,
      task: row.task,
      status: getStatusLabel(row.status),
      priority: getPriorityLabel(row.priority),
      deadline: getStrDateFromISO(row.deadline),
      tags: row.tags.map((tag: number) => getTagLabel(tag))
    };
  });
