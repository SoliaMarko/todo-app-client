import * as yup from 'yup';
import {validationError} from '@/constants/errorMessages.constant';

export const taskSchema = () =>
  yup.object().shape({
    task: yup.string().required(validationError.TASK_REQUIRED).min(5, validationError.MIN_LENGTH),
    priority: yup.string().required(validationError.PRIORITY_REQUIRED),
    deadline: yup.date().required(validationError.DEADLINE_REQUIRED),
    tags: yup.array()
  });
