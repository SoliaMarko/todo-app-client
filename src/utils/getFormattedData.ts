import {getStatusLabel, getPriorityLabel, getTagLabel} from './getLabel';
import {getStrDateFromISO} from './getFormattedDate';
import {ApiTaskRow} from '@/interfaces/apiTaskRow.interface';
import {FormattedRow} from '@/interfaces/formattedRow.interface';

export const getFormatedData = (data: ApiTaskRow[]): FormattedRow[] =>
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
