import {Box} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {DataGrid} from '@mui/x-data-grid';
import {paginationRowsOptions} from '@/constants/table.constant';
import {renderEditButton, renderDeleteButton} from '@/utils/renderButtons';
import {mockDataTasks} from '../mockData';
import {themeColors} from '../theme';

const Table = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);
  const columns = [
    {
      field: 'task',
      headerName: 'TASK',
      flex: 4,
      cellClassName: 'task-column--cell'
    },
    {field: 'priority', headerName: 'PRIORITY', flex: 1, cellClassName: 'priority-column--cell'},
    {field: 'deadline', headerName: 'DEADLINE', flex: 1, cellClassName: 'deadline-column--cell'},
    {field: 'tags', headerName: 'TAGS', flex: 2, cellClassName: 'tags-column--cell', sortable: false},
    {
      field: 'edit-button',
      headerName: '',
      flex: 1,
      cellClassName: 'edit-column--cell',
      renderCell: () => renderEditButton(),
      sortable: false,
      selectable: false
    },
    {
      field: 'delete-button',
      headerName: '',
      flex: 1,
      cellClassName: 'delete-column--cell',
      renderCell: () => renderDeleteButton(),
      sortable: false,
      selectable: false
    }
  ];

  return (
    <Box m="20px auto 40px">
      <Box
        sx={{
          '& .MuiDataGrid-root': {
            fontSize: '1rem'
          },
          '& .MuiDataGrid-root, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus': {
            outline: 'none !important'
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: colors.greenAccent[600]
          },
          '& .task-column--cell': {
            color: colors.greenAccent[200]
          },
          '& .edit-column--cell  .MuiSvgIcon-root': {
            fill: colors.greenAccent[300]
          },
          '& .delete-column--cell  .MuiSvgIcon-root': {
            fill: colors.redAccent[400]
          },
          '& .MuiSvgIcon-root': {
            fill: colors.primary[200]
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.greenAccent[600]
          }
        }}
      >
        <div style={{height: 611, width: '100%'}}>
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
            rowHeight={50}
          />
        </div>
      </Box>
    </Box>
  );
};

export default Table;
