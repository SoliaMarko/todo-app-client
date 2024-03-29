import {NavLink} from 'react-router-dom';
import {Box, IconButton, useTheme} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Form from '../components/Form';
import {TaskAction} from '../enums/taskAction.enum';
import {themeColors} from '../theme';
import {routes} from '../../constants/route.constant';

const UpdateTask = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);

  return (
    <Box>
      <Box display="flex" justifyContent="flex-start">
        <IconButton>
          <NavLink to={routes.ROOT} style={({isActive}) => ({color: isActive ? colors.redAccent[500] : colors.greenAccent[300]})}>
            <ArrowBackIcon />
          </NavLink>
        </IconButton>
      </Box>
      <Form action={TaskAction.UPDATE} />
    </Box>
  );
};

export default UpdateTask;
