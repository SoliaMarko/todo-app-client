import {statusOptions} from '@/constants/status.constant';
import {renderEditButton, renderDeleteButton, renderRadioButtons} from '@/utils/renderButtons';

export const columns = [
  {
    field: 'task',
    headerName: 'TASK',
    flex: 5,
    cellClassName: 'task-column--cell'
  },
  {field: 'status', headerName: 'STATUS', flex: 2, renderCell: () => renderRadioButtons(statusOptions)},
  {field: 'priority', headerName: 'PRIORITY', flex: 2, cellClassName: 'priority-column--cell'},
  {field: 'deadline', headerName: 'DEADLINE', flex: 2, cellClassName: 'deadline-column--cell'},
  {field: 'tags', headerName: 'TAGS', flex: 2, cellClassName: 'tags-column--cell', sortable: false},
  {
    field: 'edit-button',
    headerName: '',
    flex: 0.5,
    cellClassName: 'edit-column--cell',
    renderCell: () => renderEditButton(),
    sortable: false,
    selectable: false
  },
  {
    field: 'delete-button',
    headerName: '',
    flex: 0.5,
    cellClassName: 'delete-column--cell',
    renderCell: () => renderDeleteButton(),
    sortable: false,
    selectable: false
  }
];
