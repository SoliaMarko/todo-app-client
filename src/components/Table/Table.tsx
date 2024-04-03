import {Box} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {DataGrid} from '@mui/x-data-grid';
import {paginationRowsOptions} from '@/constants/table.constant';
import {mockDataTasks} from '../../data/mockData';
import {themeColors} from '../../theme';
import {useTableStyles} from '@/hooks/useTableStyles';
import {columns} from '@/data/overview/column';

const Table = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);
  const tableStyles = useTableStyles(colors);

  return (
    <Box m="20px auto 40px">
      <Box sx={{...tableStyles}}>
        <div style={{height: 611, width: '100%'}}>
          <DataGrid
            initialState={{
              pagination: {
                paginationModel: {pageSize: paginationRowsOptions[0]}
              }
            }}
            rows={mockDataTasks}
            columns={columns}
            pageSizeOptions={paginationRowsOptions}
            disableColumnFilter
            disableColumnMenu
            disableColumnResize
            disableRowSelectionOnClick
            rowHeight={50}
          />
        </div>
      </Box>
    </Box>
  );
};

export default Table;
