import {Box, TextField, MenuItem} from '@mui/material';
import {Formik} from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';
import {taskSchema} from '../validations/form.validation';
import {TaskAction} from '../enums/taskAction.enum';
import {priorityOptions} from '../../constants/form.constant';
import SubmitButton from './buttons/SubmitButton';
import {TaskFormModel} from '../models/form.model';

const initialValues = new TaskFormModel();

const Form = ({action}: {action: TaskAction.CREATE | TaskAction.UPDATE}) => {
  const isNonMobile = useMediaQuery('(min-width: 600px');

  const handleFormSubmit = () => {
    console.log('submit');
  };

  return (
    <Box m="20px">
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={taskSchema}>
        {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': {gridColumn: isNonMobile ? undefined : 'span 4'}
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="note"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.note}
                name="note"
                error={!!touched.note && !!errors.note}
                helperText={touched.note && errors.note}
                sx={{gridColumn: 'span 2'}}
              />
              <TextField
                fullWidth
                variant="filled"
                label="priority"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.priority}
                name="priority"
                error={!!touched.priority && !!errors.priority}
                helperText={touched.priority && errors.priority}
                select
                sx={{gridColumn: 'span 1'}}
              >
                {priorityOptions.map((option) => {
                  return (
                    <MenuItem value={option.value} key={option.value}>
                      {option.label}
                    </MenuItem>
                  );
                })}
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                type="date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.expiration_date}
                error={!!touched.expiration_date && !!errors.expiration_date}
                helperText={touched.expiration_date && errors.expiration_date}
                name="expiration_date"
                sx={{gridColumn: 'span 1'}}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <SubmitButton handleSubmit={handleFormSubmit} action={action === TaskAction.CREATE ? 'Create New Task' : 'Update Task'} />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
