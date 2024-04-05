import {Stack, Avatar, Typography} from '@mui/material';

const AvatarLetterWithText = ({text}: {text: string}) => {
  return (
    <Stack>
      <Avatar sx={{bgcolor: '#eefc5e', width: 24, height: 24}}>{text[0].toUpperCase()}</Avatar>
      <Typography>{text}</Typography>
    </Stack>
  );
};

export default AvatarLetterWithText;
