import {useState, type KeyboardEvent} from 'react';
import {IconButton, List, ListItem, TextField, Box, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import {themeColors} from '@/theme';

const TagsInput = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);
  const [tags, setTags] = useState(['work']);

  const handleAddTag = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const tag = target.value.trim();
    if (tags.includes(tag) || tag === '' || e.key !== 'Enter' || tags.length >= 5) return;
    setTags((prev) => [...prev, tag]);
    target.value = '';
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((curTag) => curTag !== tag));
  };

  return (
    <>
      <TextField
        type="text"
        id="tags"
        name="tags"
        label="tags"
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleAddTag(e)}
        sx={{gridColumn: 'span 2'}}
      />
      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Box mr="30px" p="12px 30px" borderRadius="4px" sx={{backgroundColor: colors.blueAccent[600]}}>
          <Typography>Tags:</Typography>
        </Box>
        <List sx={{display: 'flex', flexDirection: 'row', flexWrap: 'no-wrap', gridColumn: 'span 4'}}>
          {tags.map((tag, i) => (
            <ListItem key={i}>
              {tag}
              <IconButton onClick={() => handleRemoveTag(tag)}>
                <CloseIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default TagsInput;
