import {Box, useMediaQuery} from '@mui/material';
import {Formik} from 'formik';
import SubmitButton from '../Buttons/SubmitButton';
import {taskSchema} from '@/validations/form.validation';
import {TaskAction} from '@/enums/taskAction.enum';
import {TaskFormModel} from '@/models/taskForm.model';
import {priorityOptions} from '@/constants/priority.constant';
import {tagOptions as tags} from '@/constants/tags.constant';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import DateInput from './DateInput';
import MultipleAutocompleteInput from './MultipleAutocompleteInput';

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
              <TextInput type="text" name="task" props={props} cols={4} isRequired={true} />
              <SelectInput options={priorityOptions} name="priority" props={props} cols={1} isRequired={true} />
              <DateInput name="deadline" isRequired={true} />
              <MultipleAutocompleteInput options={tags} name="tags" cols={2} />
            </Box>
            <Box display="flex" justifyContent="end" mt="30px">
              <SubmitButton handleSubmit={handleFormSubmit} action={action === TaskAction.CREATE ? 'Create New Task' : 'Update Task'} />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default TasksForm;
