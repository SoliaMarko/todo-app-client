import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {ChipListProps} from '@/interfaces/chipProp.interface';

const ChipList = ({list}: ChipListProps) => {
  return (
    <Stack direction="row" spacing={1}>
      {list.map((tag, i) => (
        <Chip label={tag} variant="outlined" key={`${i}-${tag}`} />
      ))}
    </Stack>
  );
};

export default ChipList;
