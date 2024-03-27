import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Box, IconButton} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {Link} from 'react-router-dom';
import {mockDataTasks} from '../mockData';
import {paginationRowsOptions} from '../../constants/table.constant';
import {themeColors} from '../theme';
import {useTheme} from '@mui/material/styles';

const Table = () => {
  const theme = useTheme();
  const colors = themeColors(theme.palette.mode);

  const columns = [
    {field: 'id', headerName: 'ID', flex: 1},
    {
      field: 'note',
      headerName: 'TASK',
      flex: 4,
      cellClassName: 'name-column--cell'
    },
    {field: 'priority', headerName: 'PRIORITY', flex: 2},
    {field: 'expiration_date', headerName: 'EXPIRED', flex: 2},
    {field: 'tags', headerName: 'TAGS', flex: 2},
    {
      field: 'edit-button',
      headerName: '',
      renderCell: () => (
        <IconButton color="secondary" aria-label="Delete">
          {/* <Link to={`/${params.id}`} style={{ color: 'inherit', textDecoration: 'none' }}> */}
          <Link to="/id" style={{color: 'inherit', textDecoration: 'none'}}>
            <ModeEditIcon />
          </Link>
        </IconButton>
      )
    },
    {
      field: 'delete-button',
      headerName: '',
      renderCell: () => (
        <IconButton sx={{color: colors.redAccent[500]}} aria-label="Delete">
          <DeleteForeverIcon />
        </IconButton>
      )
    }
  ];

  return (
    <Box>
      <Box>
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
        />
      </Box>
    </Box>
  );
};

export default Table;
