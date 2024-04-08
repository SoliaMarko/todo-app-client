import {GridColDef} from '@mui/x-data-grid';
import RadioButtons from '@/components/Buttons/RadioButtons';
import EditButton from '@/components/Buttons/EditButton';
import DeleteButton from '@/components/Buttons/DeleteButton';
import ChipList from '@/features/ChipList';
import AvatarLetterWithText from '@/features/AvatarLetterWithText';
import {statusOptions} from '@/constants/optionsConstants/status.constant';
import {routes} from '@/constants/global.constant';

export const columns: GridColDef[] = [
  {
    field: 'task',
    headerName: 'Task',
    flex: 3.5,
    cellClassName: 'task-column--cell'
  },
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    flex: 1.5,
    align: 'center',
    renderCell: ({row}) => <RadioButtons options={statusOptions} selectedTask={row} />,
    sortable: false
  },
  {
    field: 'priority',
    headerName: 'Priority',
    headerAlign: 'center',
    flex: 1.5,
    align: 'center',
    cellClassName: 'priority-column--cell',
    renderCell: ({row}) => <AvatarLetterWithText text={row.priority} />,
    sortable: false
  },
  {field: 'deadline', headerName: 'Deadline', headerAlign: 'center', flex: 1.5, align: 'center', cellClassName: 'deadline-column--cell'},
  {
    field: 'tags',
    headerName: 'Tags',
    headerAlign: 'center',
    flex: 2,
    align: 'left',
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
    renderCell: ({row}) => (
      <div>
        <EditButton link={`${routes.TASK}/${row._id}`} />
        <DeleteButton task={row} />
      </div>
    ),
    sortable: false
  }
];
