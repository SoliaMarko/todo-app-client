import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {formats} from '@/constants/global.constant';
import dayjs, {Dayjs} from 'dayjs';

const DateInput = ({name, value, onChange}: {name: string; value: dayjs.Dayjs; onChange: (name: string, date: dayjs.Dayjs) => void}) => {
  const handleChange = (date: Dayjs | null) => {
    onChange(name, dayjs(date));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={name}
        name={name}
        format={formats.DATE_FORMAT}
        onChange={handleChange}
        value={value}
        // slotProps={{field: {clearable: true}}}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
