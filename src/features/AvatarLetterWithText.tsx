import {Stack, Avatar} from '@mui/material';

const AvatarLetterWithText = ({text}: {text: 'Low' | 'Medium' | 'High' | 'Critical'; size: number}) => {
  const avatarLetterColors = {
    darkTheme: {
      Low: '#7ed957',
      Medium: '#fdae61',
      High: '#f97316',
      Critical: '#d00024'
    }
  };

  const backgroundColor = avatarLetterColors.darkTheme[text];

  return (
    <Stack>
      <Avatar sx={{bgcolor: {backgroundColor}, border: '1px solid #dbf5ee', width: 30, height: 30}}>{text[0].toUpperCase()}</Avatar>
    </Stack>
  );
};

export default AvatarLetterWithText;
