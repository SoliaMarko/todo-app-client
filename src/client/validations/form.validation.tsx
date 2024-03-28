import * as yup from 'yup';
import {validationError} from '../../constants/errorMessages.constant';

export const taskSchema = yup.object().shape({
  note: yup.string().required(validationError.NOTE_REQUIRED),
  priority: yup.string().required(validationError.PRIORITY_REQUIRED),
  expiration_date: yup.string().required(validationError.EXPIRATION_REQUIRED),
  tags: yup.array()
});
