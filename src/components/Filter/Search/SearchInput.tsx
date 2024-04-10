import {ChangeEvent} from '@/interfaces/globalInterfaces/changeEvent.interface';
import SearchIcon from '@mui/icons-material/Search';
import {TextField} from '@mui/material';
import {InputAdornment} from '@mui/material';
import {SearchInputProps} from '@/interfaces/filterInterfaces/searchInputProps.interface';

const SearchInput = ({name, cols = 3, value, onChange}: SearchInputProps) => {
  const handleChange = (event: ChangeEvent) => {
    onChange(name, event.target.value.trim().toLowerCase());
  };

  return (
    <TextField
      label={name}
      id={name}
      sx={{gridColumn: `span ${cols}`}}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
