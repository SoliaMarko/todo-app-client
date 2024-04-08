import {statusOptions} from '@/constants/optionsConstants/status.constant';
import {priorityOptions} from '@/constants/optionsConstants/priority.constant';
import {tagOptions} from '@/constants/optionsConstants/tags.constant';

export const getStatusValue = (label: string): number => statusOptions.find((option) => option.label === label)?.value || statusOptions[0].value;

export const getPriorityValue = (label: string): number =>
  priorityOptions.find((option) => option.label === label)?.value || priorityOptions[0].value;

export const getTagValue = (label: string): number => tagOptions.find((option) => option.label === label)?.value || tagOptions[0].value;
