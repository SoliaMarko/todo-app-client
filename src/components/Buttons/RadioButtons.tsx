import {useState} from 'react';
import {Radio, Tooltip} from '@mui/material';
import {StatusOption} from '@/interfaces/optionsInterfaces/status.interface';
import {statusOptions} from '@/constants/status.constant';

const RadioButtons = ({options}: {options: StatusOption[]}) => {
  const [selectedValue, setSelectedValue] = useState(statusOptions[0].label);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'status',
    inputProps: {'aria-label': item}
  });

  return (
    <>
      {options.map(({label, color}, i) => (
        <Tooltip title={label} key={i}>
          <Radio
            {...controlProps(label)}
            sx={{
              '&.Mui-checked': {
                color: color
              }
            }}
          />
        </Tooltip>
      ))}
    </>
  );
};

export default RadioButtons;
