import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {DateInputProps} from '@/interfaces/formInterfaces/inputProps.interface';
import {formats} from '@/constants/global.constant';
import dayjs from 'dayjs';

const DateInput = ({name, isRequired, defaultDate, values}: DateInputProps) => {
  const handleDateChange = (date: dayjs.Dayjs | null): void => {
    if (date) {
      values.deadline = date.toISOString();
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={name}
        name={name}
        format={formats.DATE_FORMAT}
        defaultValue={defaultDate}
        disablePast
        slotProps={{
          textField: {
            required: isRequired
          }
        }}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
