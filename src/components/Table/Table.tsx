import {Box} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {DataGrid} from '@mui/x-data-grid';
import {paginationRowsOptions} from '@/constants/table.constant';
import {mockDataTasks} from '../../data/mockData';
import {themeColors} from '../../theme';
import {useTableStyles} from '@/hooks/useTableStyles';
import {columns} from '@/data/overview/column';
import getFormatedData from '@/utils/getFormattedData';

const Table = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);
  const tableStyles = useTableStyles(colors);
  const formatedData = getFormatedData(mockDataTasks);

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
            rows={formatedData}
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
