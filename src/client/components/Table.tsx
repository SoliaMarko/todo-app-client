import {Box} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {DataGrid} from '@mui/x-data-grid';
import {mockDataTasks} from '../mockData';
import {paginationRowsOptions} from '../../constants/table.constant';
import {themeColors} from '../theme';
import {renderEditButton, renderDeleteButton} from '../../utils/renderButtons';

const Table = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);
  const columns = [
    {field: 'id', headerName: 'ID', flex: 1},
    {
      field: 'task',
      headerName: 'TASK',
      flex: 4,
      cellClassName: 'task-column--cell'
    },
    {field: 'priority', headerName: 'PRIORITY', flex: 2},
    {field: 'deadline', headerName: 'DEADLINE', flex: 2},
    {field: 'tags', headerName: 'TAGS', flex: 2},
    {
      field: 'edit-button',
      headerName: '',
      renderCell: () => renderEditButton(),
      sortable: false
    },
    {
      field: 'delete-button',
      headerName: '',
      renderCell: () => renderDeleteButton(),
      sortable: false
    }
  ];

  return (
    <Box m="20px">
      <Box
        height="80vh"
        sx={{
          '& .task-column--cell': {
            color: colors.greenAccent[200]
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: colors.greenAccent[600]
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.greenAccent[600]
          },
          '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus': {
            outline: 'none !important'
          },
          '& .MuiDataGrid-root, & .MuiDataGrid-cell:focus-within': {
            outline: 'none !important'
          },
          '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {},
          '& .MuiSvgIcon-root': {
            fill: colors.primary[200]
          }
        }}
      >
        <DataGrid
          initialState={{
            pagination: {
              paginationModel: {pageSize: paginationRowsOptions[0]}
            }
          }}
          checkboxSelection
          rows={mockDataTasks}
          columns={columns}
          pageSizeOptions={paginationRowsOptions}
          disableColumnFilter
          disableColumnMenu
          disableColumnResize
        />
      </Box>
    </Box>
  );
};

export default Table;
