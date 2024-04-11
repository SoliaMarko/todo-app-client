import {useNavigate} from 'react-router-dom';
import {Box, Card, useMediaQuery} from '@mui/material';
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

const TasksForm = ({title, task}: TaskFormProps) => {
  const [addNewTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const isNonMobile = useMediaQuery('(min-width: 600px');
  const initialValues = task ? {...task} : new TaskFormModel();
  const navigate = useNavigate();

  const handleFormSubmit = (values: TaskFormModel): void => {
    if (title === 'create') {
      values.deadline = getISODateFromStr(values.deadline);
      addNewTask(Object.assign({}, values));
      navigate(`${routes.ROOT}`);
    }
    if (title === 'update') {
      updateTask(values);
      navigate(`${routes.ROOT}`);
    }
  };

  return (
    <Card sx={{bgcolor: '#587c87', height: 420}}>
      <Box m="20px" sx={{height: '100%'}}>
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={taskSchema} sx={{height: '100%'}}>
          {(props): JSX.Element => (
            <form onSubmit={props.handleSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
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
              <Box display="flex" justifyContent="flex-end" mb="40px">
                <SubmitButton title={title === TaskAction.CREATE ? 'Create New Task' : 'Update Task'} />
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Card>
  );
};

export default TasksForm;
