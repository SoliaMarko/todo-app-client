import {Box} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {DataGrid} from '@mui/x-data-grid';
import {columns} from '@/data/overview/column';
import {useTableStyles} from '@/hooks/useTableStyles';
import {getFormatedData} from '@/utils/getFormattedData';
import {paginationRowsOptions} from '@/constants/global.constant';
import {ApiTaskRow} from '@/interfaces/apiTaskRow.interface';
import {themeColors} from '@/theme';

const Table = ({tasks}: {tasks: ApiTaskRow[]}) => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);
  const tableStyles = useTableStyles(colors);
  const formatedData = getFormatedData(tasks);

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
