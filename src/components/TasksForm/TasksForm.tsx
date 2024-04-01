import {Box, useMediaQuery} from '@mui/material';
import {Formik, FieldArray} from 'formik';
import SubmitButton from '../Buttons/SubmitButton';
import {taskSchema} from '@/validations/form.validation';
import {TaskAction} from '@/enums/taskAction.enum';
import {TaskFormModel} from '@/models/taskForm.model';
import {priorityOptions} from '@/constants/priority.constant';
import TagsInput from './TagsInput';
import FormInput from './FormInput';

const initialValues = new TaskFormModel();

const TasksForm = ({action}: {action: TaskAction.CREATE | TaskAction.UPDATE}) => {
  const isNonMobile = useMediaQuery('(min-width: 600px');

  const handleFormSubmit = () => {
    console.log('submit');
  };

  return (
    <Box m="20px">
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={taskSchema}>
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': {gridColumn: isNonMobile ? undefined : 'span 4'}
              }}
            >
              <FormInput type="text" name="task" props={props} cols={4} />
              <FormInput options={priorityOptions} name="priority" props={props} cols={1} />
              <FormInput type="date" name="deadline" props={props} cols={1} />
              <FieldArray name="tags">{() => <TagsInput />}</FieldArray>
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

export default TasksForm;
