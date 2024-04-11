import {Filters} from '@/interfaces/filterInterfaces/filters.props.interface';
import {FormattedTaskRow} from '@/interfaces/formattedTaskRow.interface';
import dayjs from 'dayjs';

const findBySearch = (tasks: FormattedTaskRow[], search: string): FormattedTaskRow[] => {
  return tasks.filter((task) => Object.values(task).some((value) => value.toString().toLowerCase().includes(search)));
};

const filterByStatus = (tasks: FormattedTaskRow[], status: string[]): FormattedTaskRow[] => tasks.filter((task) => status.includes(task.status));

const filterByPriority = (tasks: FormattedTaskRow[], priority: string[]): FormattedTaskRow[] =>
  tasks.filter((task) => priority.includes(task.priority));

const filterByDateRange = (task: FormattedTaskRow, startDate: Date, endDate: Date): boolean => {
  const deadline = dayjs(task.deadline, 'DD-MM-YYYY');

  if (startDate && endDate) {
    const min = dayjs(startDate).valueOf();
    const max = dayjs(endDate).valueOf();
    const deadlineTimestamp = deadline.valueOf();

    return deadlineTimestamp >= min && deadlineTimestamp <= max;
  }
  if (startDate) {
    const min = dayjs(startDate).valueOf();

    return deadline.valueOf() >= min;
  }
  if (endDate) {
    const max = dayjs(endDate).valueOf();

    return deadline.valueOf() <= max;
  }

  return true;
};

const getFilteredTasks = (tasks: FormattedTaskRow[], filters: Filters) => {
  let filteredTasks = [...tasks];

  if (filters.search) {
    filteredTasks = findBySearch(filteredTasks, filters.search);
  }
  if (filters.status.length) {
    filteredTasks = filterByStatus(filteredTasks, filters.status);
  }
  if (filters.priority.length) {
    filteredTasks = filterByPriority(filteredTasks, filters.priority);
  }
  if (filters.startDate || filters.endDate) {
    filteredTasks = filteredTasks.filter((task) => filterByDateRange(task, filters.startDate, filters.endDate));
  }

  return filteredTasks;
};

export default getFilteredTasks;
