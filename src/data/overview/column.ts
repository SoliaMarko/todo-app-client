import {renderEditButton, renderDeleteButton} from '@/utils/renderButtons';
import {routes} from '@/constants/route.constant';

export const columns = [
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
    renderCell: () => renderEditButton(`${routes.TASK}/${routes.UPDATE}`),
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
