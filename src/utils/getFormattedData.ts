import {TaskData} from '@/interfaces/globalInterfaces/taskData.interface';
import {getStatusLabel, getPriorityLabel, getTagLabel} from './getLabel';

const getFormatedData = (data: TaskData[]) => {
  return data.map((row: TaskData) => {
    return {
      _id: row._id,
      task: row.task,
      status: getStatusLabel(row.status),
      priority: getPriorityLabel(row.priority),
      deadline: row.deadline,
      tags: row.tags.map((tag: number) => getTagLabel(tag))
    };
  });
};

export default getFormatedData;
