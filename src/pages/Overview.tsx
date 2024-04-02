import {Box, IconButton, useTheme} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {NavLink} from 'react-router-dom';
import Table from '@/components/Table/Table';
import Filter from '@/components/Filter/Filter';
import {themeColors} from '@/theme';
import {routes} from '@/constants/route.constant';

const Overview = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);

  return (
    <Box>
      <Box display="flex" justifyContent="flex-start">
        <Filter />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <IconButton>
          <NavLink
            to={`${routes.TASK}/${routes.CREATE}`}
            style={({isActive}) => ({color: isActive ? colors.redAccent[500] : colors.greenAccent[300]})}
          >
            <AddIcon />
          </NavLink>
        </IconButton>
      </Box>
      <Table />
    </Box>
  );
};

export default Overview;
