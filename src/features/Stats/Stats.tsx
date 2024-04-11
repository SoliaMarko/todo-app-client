import {useState} from 'react';
import {Box, Button, Typography, Modal, List, ListItem, ListItemText, ListItemAvatar, Divider} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {FormattedTaskRow} from '@/interfaces/formattedTaskRow.interface';
import AvatarLetterWithText from '../AvatarLetterWithText';
import {getAllPriorityLabels, getAllStatusLabels} from '@/utils/getLabel';
import {StatusCount, PriorityCount} from '@/interfaces/stats.interface';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const statusLabels = getAllStatusLabels();
const priorityLabels = getAllPriorityLabels();

const Stats = ({tasks}: {tasks: FormattedTaskRow[]}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const statusCounts = statusLabels.reduce((acc: StatusCount, status: string) => {
    acc[status] = tasks.filter((task) => task.status === status).length;

    return acc;
  }, {});

  const priorityCounts = priorityLabels.reduce((acc: PriorityCount, priority) => {
    acc[priority] = tasks.filter((task) => task.priority === priority).length;

    return acc;
  }, {});

  return (
    <div>
      <Button type="submit" onClick={handleOpen} color="secondary" variant="contained">
        <InfoIcon />
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="stats-title" variant="h4" component="h2">
            Stats
          </Typography>
          <Divider />
          <Typography id="stats-title" variant="h6" component="h2">
            By Status:
          </Typography>
          <List sx={{textAlign: 'center'}}>
            {statusLabels.map((label, index) => (
              <ListItem key={index} sx={{py: 0}}>
                <ListItemText>
                  {label}: {statusCounts[label]}
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography id="stats-title" variant="h6" component="h2">
            By Priority
          </Typography>
          <List>
            {priorityLabels.map((label, index) => (
              <ListItem key={index} sx={{py: 0, display: 'flex', justifyContent: 'space-between'}}>
                <ListItemAvatar>
                  <AvatarLetterWithText text={label} />
                </ListItemAvatar>
                <ListItemText>{priorityCounts[label]}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>
    </div>
  );
};

export default Stats;
