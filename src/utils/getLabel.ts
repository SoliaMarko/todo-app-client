import {statusOptions} from '@/constants/optionsConstants/status.constant';
import {priorityOptions} from '@/constants/optionsConstants/priority.constant';
import {tagOptions} from '@/constants/optionsConstants/tags.constant';

export const getStatusLabel = (value: number) => {
  return statusOptions.find((option) => option.value === value)?.label;
};

export const getPriorityLabel = (value: number) => {
  return priorityOptions.find((option) => option.value === value)?.label;
};

export const getTagLabel = (value: number) => {
  return tagOptions.find((option) => option.value === value)?.label;
};
