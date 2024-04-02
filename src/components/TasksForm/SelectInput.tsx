import {TextField, MenuItem} from '@mui/material';
import {SelectInputProps} from '@/interfaces/formInterfaces/taskFieldProps.interface';

const SelectInput = ({options, name, props, cols}: SelectInputProps) => {
  const field = {
    name,
    id: name,
    label: name,
    value: props.values[name],
    onChange: props.handleChange,
    onBlur: props.handleBlur
  };

  return (
    <TextField
      select
      {...field}
      error={!!props.touched[name] && !!props.errors[name]}
      helperText={props.touched[name] && props.errors[name]}
      sx={{gridColumn: `span ${cols}`}}
    >
      {options.map((option) => {
        return (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectInput;
