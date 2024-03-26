import * as yup from 'yup';

export const taskSchema = yup.object().shape({
  note: yup.string().required('required'),
  priority: yup.string().required('required'),
  expiration_date: yup.string().required('required'),
  tags: yup.array()
});
