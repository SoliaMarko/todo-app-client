import Autocomplete, {AutocompleteRenderInputParams} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {MultipleAutocompleteInputProps} from '@/interfaces/formInterfaces/inputProps.interface';
import {TagOption} from '@/interfaces/optionsInterfaces/tag.interface';

const MultipleAutocompleteInput = ({options, name, cols = 2, values}: MultipleAutocompleteInputProps) => {
  const handleGetLabel = (option: TagOption): string => option.label;

  const handleInputRender = (params: AutocompleteRenderInputParams): JSX.Element => (
    <TextField {...params} label={`select ${name}`} placeholder={name} />
  );

  const handleChange = (_: React.SyntheticEvent<EventTarget>, selected: TagOption[]): void => {
    values.tags = selected.map((item: TagOption) => item.value);
  };

  return (
    <Autocomplete
      multiple
      id={name}
      options={options}
      getOptionLabel={handleGetLabel}
      filterSelectedOptions
      renderInput={handleInputRender}
      sx={{gridColumn: `span ${cols}`}}
      onChange={handleChange}
    />
  );
};

export default MultipleAutocompleteInput;
