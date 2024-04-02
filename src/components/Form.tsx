import {Box, TextField, MenuItem, useMediaQuery} from '@mui/material';
import {Formik} from 'formik';
import SubmitButton from './buttons/SubmitButton';
import {taskSchema} from '@/validations/form.validation';
import {TaskAction} from '@/enums/taskAction.enum';
import {TaskFormModel} from '@/models/form.model';
import {priorityOptions} from '@/constants/form.constant';

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
                id="task"
                name="task"
                label="task"
                value={values.task}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.task && !!errors.task}
                helperText={touched.task && errors.task}
                sx={{gridColumn: 'span 4'}}
              />
              <TextField
                fullWidth
                variant="filled"
                select
                id="priority"
                name="priority"
                label="priority"
                value={values.priority}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.priority && !!errors.priority}
                helperText={touched.priority && errors.priority}
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
                id="deadline"
                name="deadline"
                value={values.deadline}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.deadline && !!errors.deadline}
                helperText={touched.deadline && errors.deadline}
                sx={{gridColumn: 'span 1'}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                id="tags"
                name="tags"
                label="tags"
                value={values.tags}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.tags && !!errors.tags}
                helperText={touched.tags && errors.tags}
                sx={{gridColumn: 'span 2'}}
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
