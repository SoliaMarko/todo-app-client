import {type ReactNode} from 'react';
import {TextField, MenuItem} from '@mui/material';
import {SelectInputProps} from '@/interfaces/formInterfaces/inputProps.interface';

const SelectInput = <T,>({options, name, props, cols, isRequired}: SelectInputProps<T>) => {
  const field = {
    name,
    id: name,
    label: name,
    value: props.values[name as keyof T],
    onChange: props.handleChange,
    onBlur: props.handleBlur
  };

  return (
    <TextField
      select
      {...field}
      error={!!props.touched[name as keyof T] && !!props.errors[name as keyof T]}
      helperText={(props.touched[name as keyof T] && props.errors[name as keyof T]) as ReactNode}
      sx={{gridColumn: `span ${cols}`}}
      required={isRequired}
    >
      {options.map((option): JSX.Element => {
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
