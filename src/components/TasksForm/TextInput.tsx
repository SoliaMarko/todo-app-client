import {TextField} from '@mui/material';
import {TextInputProps} from '@/interfaces/taskFieldProps.interface';

const TextInput = ({type, name, props, cols}: TextInputProps) => {
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
      type={type}
      {...field}
      error={!!props.touched[name] && !!props.errors[name]}
      helperText={props.touched[name] && props.errors[name]}
      sx={{gridColumn: `span ${cols}`}}
    />
  );
};

export default TextInput;
