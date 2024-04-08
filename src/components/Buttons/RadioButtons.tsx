import {useState} from 'react';
import {Radio, Tooltip} from '@mui/material';
import {useUpdateTaskStatusMutation} from '@/store';
import {SelectButtonsProps} from '@/interfaces/formInterfaces/selectButtonsProps';
import {ControlProps} from '@/interfaces/controlProps.interface';

const RadioButtons = ({options, selectedTask}: SelectButtonsProps) => {
  const [selectedValue, setSelectedValue] = useState(selectedTask.status);
  const [updateTaskState] = useUpdateTaskStatusMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedValue(event.target.value);
    updateTaskState({...selectedTask, status: event.target.value});
  };

  const controlProps = (item: string): ControlProps => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'status',
    inputProps: {'aria-label': item}
  });

  return (
    <>
      {options.map(({label, color}, i) => (
        <Tooltip title={label} key={i}>
          <Radio
            {...controlProps(label)}
            sx={{
              '&.Mui-checked': {
                color: color
              }
            }}
          />
        </Tooltip>
      ))}
    </>
  );
};

export default RadioButtons;
