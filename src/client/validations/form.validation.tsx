import * as yup from 'yup';
import {NOTE_REQUIRED, PRIORITY_REQUIRED, EXPIRATION_REQUIRED} from '../../constants/errorMessages.constant';

export const taskSchema = yup.object().shape({
  note: yup.string().required(NOTE_REQUIRED),
  priority: yup.string().required(PRIORITY_REQUIRED),
  expiration_date: yup.string().required(EXPIRATION_REQUIRED),
  tags: yup.array()
});
