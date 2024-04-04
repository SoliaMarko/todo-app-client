import {statusOptions} from '@/constants/status.constant';
import {renderRadioButtons, renderActionsButtons} from '@/utils/renderButtons';
import {GridColDef} from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  {
    field: 'task',
    headerName: 'Task',
    flex: 5,
    cellClassName: 'task-column--cell'
  },
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    flex: 2,
    align: 'center',
    renderCell: () => renderRadioButtons(statusOptions),
    sortable: false
  },
  {
    field: 'priority',
    headerName: 'Priority',
    headerAlign: 'center',
    flex: 2,
    align: 'center',
    cellClassName: 'priority-column--cell',
    sortable: false
  },
  {field: 'deadline', headerName: 'Deadline', headerAlign: 'center', flex: 2, align: 'center', cellClassName: 'deadline-column--cell'},
  {field: 'tags', headerName: 'Tags', headerAlign: 'center', flex: 2, align: 'center', cellClassName: 'tags-column--cell', sortable: false},
  {
    field: 'actions',
    headerName: 'Actions',
    headerAlign: 'center',
    flex: 1,
    align: 'center',
    cellClassName: 'actions-column--cell',
    renderCell: () => renderActionsButtons(),
    sortable: false
  }
];
