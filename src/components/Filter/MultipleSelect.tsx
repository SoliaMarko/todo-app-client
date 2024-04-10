import {OutlinedInput, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import {MultipleSelectProps} from '@/interfaces/filterInterfaces/multipleSelectProps.interface';
import {ChangeEvent} from '@/interfaces/globalInterfaces/changeEvent.interface';

const MultipleSelect = ({name, options, value, onChange}: MultipleSelectProps) => {
  const handleChange = (event: ChangeEvent) => {
    onChange(name, event.target.value);
  };

  return (
    <FormControl sx={{width: 300}}>
      <InputLabel id={`${name}-label`}>{name}</InputLabel>
      <Select labelId={`${name}-label`} id={name} multiple value={value} onChange={handleChange} input={<OutlinedInput label="Name" />}>
        {options.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
