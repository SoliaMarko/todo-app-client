import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import getTodayDate from '@/utils/getTodayDate';
import dayjs from 'dayjs';
import {DateInputProps} from '@/interfaces/inputProps.interface';
import {formats} from '@/constants/global.constant';

const DateInput = ({name}: DateInputProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={name} name={name} format={formats.DATE_FORMAT} defaultValue={dayjs(getTodayDate())} />
    </LocalizationProvider>
  );
};

export default DateInput;
