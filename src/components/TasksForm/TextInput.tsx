import {TextField} from '@mui/material';
import {TextInputProps} from '@/interfaces/formInterfaces/taskFieldProps.interface';

const TextInput = ({type, name, props, cols, isRequired}: TextInputProps) => {
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
      required={isRequired}
    />
  );
};

export default TextInput;
