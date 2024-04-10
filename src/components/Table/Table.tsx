import {useSelector} from 'react-redux';
import {Box} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {DataGrid} from '@mui/x-data-grid';
import {columns} from '@/data/overview/column';
import {useTableStyles} from '@/hooks/useTableStyles';
import {paginationRowsOptions} from '@/constants/global.constant';
import {themeColors} from '@/theme';
import {FormattedTaskRow} from '@/interfaces/formattedTaskRow.interface';
import {IRootState} from '@/types/IRootState.type';
import getFilteredTasks from '@/utils/getFilteredTasks';

const Table = ({tasks}: {tasks: FormattedTaskRow[]}) => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);
  const tableStyles = useTableStyles(colors);
  const filters = useSelector((state: IRootState) => state.filters);
  const filteredTasks = getFilteredTasks(tasks, filters);

  return (
    <Box m="20px auto 40px">
      <Box sx={{...tableStyles}}>
        <Box sx={{height: 661, width: '100%'}}>
          <DataGrid
            initialState={{
              pagination: {
                paginationModel: {pageSize: paginationRowsOptions[0]}
              }
            }}
            rows={filteredTasks}
            columns={columns}
            getRowId={(row) => row._id}
            disableColumnFilter
            disableColumnMenu
            disableColumnResize
            disableRowSelectionOnClick
            pageSizeOptions={paginationRowsOptions}
            rowHeight={50}
            sx={{backgroundColor: theme.palette.mode === 'dark' ? colors.primary[500] : '#f5faf9'}}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Table;
