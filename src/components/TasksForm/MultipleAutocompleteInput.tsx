import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {MultipleAutocompleteInputProps} from '@/interfaces/formInterfaces/multipleAutocompleteInputProps.interface';

const MultipleAutocompleteInput = ({options, name, cols = 2}: MultipleAutocompleteInputProps) => {
  return (
    <Autocomplete
      multiple
      id={name}
      options={options}
      getOptionLabel={(option) => option.label}
      defaultValue={[options[1]]}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label={`select ${name}`} placeholder={name} />}
      sx={{gridColumn: `span ${cols}`}}
    />
  );
};

export default MultipleAutocompleteInput;
