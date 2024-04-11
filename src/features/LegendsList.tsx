import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AvatarLetterWithText from './AvatarLetterWithText';
import {getAllPriorityLabels} from '@/utils/getLabel';
import {themeColors} from '@/theme';
import {useTheme} from '@mui/material';

const labels = getAllPriorityLabels();

const LegendsList = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);

  return (
    <List sx={{bgcolor: theme.palette.mode === 'dark' ? colors.primary[500] : '#f5faf9', display: 'flex', flexDirection: 'row', mr: 5}}>
      {labels.map((label, index) => (
        <ListItem key={index} sx={{py: 0}}>
          <ListItemAvatar>
            <AvatarLetterWithText text={label} />
          </ListItemAvatar>
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  );
};

export default LegendsList;
