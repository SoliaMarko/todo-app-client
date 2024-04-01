import {TextField, MenuItem} from '@mui/material';
import {TaskFieldProps} from '@/interfaces/taskFieldProps.interface';

const FormInput = ({type, options, name, props, cols}: TaskFieldProps) => {
  const field = {
    name,
    id: name,
    label: name,
    value: props.values[name],
    onChange: props.handleChange,
    onBlur: props.handleBlur
  };

  if (options && options.length > 0) {
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
  }

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

export default FormInput;
