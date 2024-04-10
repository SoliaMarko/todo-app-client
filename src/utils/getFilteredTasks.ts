import {Filters} from '@/interfaces/filterInterfaces/filters.props.interface';
import {FormattedTaskRow} from '@/interfaces/formattedTaskRow.interface';
import dayjs from 'dayjs';

const filterByStatus = (tasks: FormattedTaskRow[], status: string[]) => {
  return tasks.filter((task) => {
    return status.includes(task.status);
  });
};

const filterByPriority = (tasks: FormattedTaskRow[], priority: string[]) => {
  return tasks.filter((task) => {
    return priority.includes(task.priority);
  });
};

const filterByDateRange = (task: FormattedTaskRow, from: Date, to: Date) => {
  const deadline = dayjs(task.deadline, 'DD-MM-YYYY');

  if (from && to) {
    const min = dayjs(from).valueOf();
    const max = dayjs(to).valueOf();
    const deadlineTs = deadline.valueOf();

    return deadlineTs >= min && deadlineTs <= max;
  } else if (from) {
    const min = dayjs(from).valueOf();
    return deadline.valueOf() >= min;
  } else if (to) {
    const max = dayjs(to).valueOf();
    return deadline.valueOf() <= max;
  }

  return true;
};

const getFilteredTasks = (tasks: FormattedTaskRow[], filters: Filters) => {
  let filteredTasks = [...tasks];

  if (filters.status.length) {
    filteredTasks = filterByStatus(filteredTasks, filters.status);
  }

  if (filters.priority.length) {
    filteredTasks = filterByPriority(filteredTasks, filters.priority);
  }

  if (filters.from || filters.to) {
    filteredTasks = filteredTasks.filter((task) => {
      return filterByDateRange(task, filters.from, filters.to);
    });
  }

  return filteredTasks;
};

export default getFilteredTasks;
