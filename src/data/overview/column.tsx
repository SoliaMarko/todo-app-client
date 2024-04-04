import {statusOptions} from '@/constants/optionsConstants/status.constant';
import {GridColDef} from '@mui/x-data-grid';
import RadioButtons from '@/components/Buttons/RadioButtons';
import EditButton from '@/components/Buttons/EditButton';
import DeleteButton from '@/components/Buttons/DeleteButton';
import ChipList from '@/features/Filter/ChipList';

export const columns: GridColDef[] = [
  {
    field: 'task',
    headerName: 'Task',
    flex: 4,
    cellClassName: 'task-column--cell'
  },
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    flex: 2,
    align: 'center',
    renderCell: () => <RadioButtons options={statusOptions} />,
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
  {
    field: 'tags',
    headerName: 'Tags',
    headerAlign: 'center',
    flex: 2,
    align: 'center',
    cellClassName: 'tags-column--cell',
    renderCell: ({row}) => <ChipList list={row.tags} />,
    sortable: false
  },
  {
    field: 'actions',
    headerName: 'Actions',
    headerAlign: 'center',
    flex: 1,
    align: 'center',
    display: 'flex',
    cellClassName: 'actions-column--cell',
    renderCell: () => (
      <>
        <EditButton />
        <DeleteButton />
      </>
    ),
    sortable: false
  }
];
