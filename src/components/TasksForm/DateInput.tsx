import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import getTodayDate from '@/utils/getTodayDate';
import dayjs from 'dayjs';
import {DateInputProps} from '@/interfaces/formInterfaces/inputProps.interface';
import {formats} from '@/constants/global.constant';

const DateInput = ({name, isRequired}: DateInputProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={name}
        name={name}
        format={formats.DATE_FORMAT}
        defaultValue={dayjs(getTodayDate())}
        disablePast
        slotProps={{
          textField: {
            required: isRequired
          }
        }}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
