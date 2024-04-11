import {useDispatch, useSelector} from 'react-redux';
import {Box, Button, useMediaQuery} from '@mui/material';
import {type Dayjs} from 'dayjs';
import MultipleSelect from './MultipleSelect';
import DateInput from './DateInput';
import SearchInput from './Search/SearchInput';
import {getAllPriorityLabels, getAllStatusLabels} from '@/utils/getLabel';
import {resetFilters, setFilters} from '@/store/slices/filterSlice';
import {IRootState} from '@/types/IRootState.type';

const Filter = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px');
  const {search, status, priority, startDate, endDate} = useSelector((state: IRootState) => state.filters);
  const dispatch = useDispatch();

  const handleChange = (name: string, value: string | Dayjs) => {
    dispatch(
      setFilters({
        [name]: value
      })
    );
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'space-between'}}>
      <form style={{width: '100%'}}>
        <Box
          display="flex"
          gap="30px"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            '& > div': {gridColumn: isNonMobile ? undefined : 'span 12'}
          }}
        >
          <SearchInput name="search" value={search} onChange={handleChange} />
          <MultipleSelect name="status" options={[...getAllStatusLabels()]} value={status} onChange={handleChange} />
          <MultipleSelect name="priority" options={getAllPriorityLabels()} value={priority} onChange={handleChange} />
          <DateInput name="startDate" value={startDate} onChange={handleChange} />
          <DateInput name="endDate" value={endDate} onChange={handleChange} />
          <Button type="reset" color="secondary" variant="contained" onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Filter;
