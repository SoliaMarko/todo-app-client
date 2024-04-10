import {type ReactNode} from 'react';
import {TextField} from '@mui/material';
import {TextInputProps} from '@/interfaces/formInterfaces/inputProps.interface';

const TextInput = <T,>({type, name, props, cols = 4, isRequired}: TextInputProps<T>) => {
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
      type={type}
      {...field}
      error={!!props.touched[name as keyof T] && !!props.errors[name as keyof T]}
      helperText={(props.touched[name as keyof T] && props.errors[name as keyof T]) as ReactNode}
      sx={{gridColumn: `span ${cols}`}}
      required={isRequired}
    />
  );
};

export default TextInput;
