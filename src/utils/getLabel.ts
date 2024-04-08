import {statusOptions} from '@/constants/optionsConstants/status.constant';
import {priorityOptions} from '@/constants/optionsConstants/priority.constant';
import {tagOptions} from '@/constants/optionsConstants/tags.constant';

export const getStatusLabel = (value: number) => statusOptions.find((option) => option.value === value)?.label || statusOptions[0].label;

export const getPriorityLabel = (value: number) => priorityOptions.find((option) => option.value === value)?.label || priorityOptions[0].label;

export const getTagLabel = (value: number) => tagOptions.find((option) => option.value === value)?.label || tagOptions[0].label;
