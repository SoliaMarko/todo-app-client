import {Navigate} from 'react-router-dom';
import {Box, useMediaQuery} from '@mui/material';
import {Formik} from 'formik';
import dayjs from 'dayjs';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import DateInput from './DateInput';
import MultipleAutocompleteInput from './MultipleAutocompleteInput';
import SubmitButton from '../Buttons/SubmitButton';
import {taskSchema} from '@/validations/form.validation';
import {TaskAction} from '@/enums/taskAction.enum';
import {TaskFormModel} from '@/models/taskForm.model';
import {TaskFormProps} from '@/interfaces/formInterfaces/taskFormProps.interface';
import {priorityOptions} from '@/constants/optionsConstants/priority.constant';
import {tagOptions as tags} from '@/constants/optionsConstants/tags.constant';
import {getDateFrom, getISODateFromStr} from '@/utils/getFormattedDate';
import {useCreateTaskMutation, useUpdateTaskMutation} from '@/store';
import {routes} from '@/constants/global.constant';

const TasksForm = ({title, taskData}: TaskFormProps) => {
  const [addNewTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const isNonMobile = useMediaQuery('(min-width: 600px');
  const initialValues = taskData ? {...taskData} : new TaskFormModel();

  const handleFormSubmit = (values: TaskFormModel): void => {
    if (title === 'create') {
      values.deadline = getISODateFromStr(values.deadline);
      addNewTask(Object.assign({}, values));
      <Navigate to={`${routes.ROOT}`} replace={true} />;
    }
    if (title === 'update') {
      updateTask(values);
      <Navigate to={`${routes.ROOT}`} replace={true} />;
    }
  };

  return (
    <Box m="20px">
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={taskSchema}>
        {(props): JSX.Element => (
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
              <DateInput name="deadline" isRequired={true} defaultDate={dayjs(getDateFrom(initialValues.deadline))} values={props.values} />
              <MultipleAutocompleteInput options={tags} name="tags" cols={2} values={props.values} />
            </Box>
            <Box display="flex" justifyContent="end" mt="30px">
              <SubmitButton handleSubmit={handleFormSubmit} title={title === TaskAction.CREATE ? 'Create New Task' : 'Update Task'} />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default TasksForm;
