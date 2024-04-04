import {PaletteColorScale} from '@/interfaces/globalInterfaces/colorsScale.interface';

export const useTableStyles = (colors: PaletteColorScale) => {
  return {
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
    '& .tags-column--cell': {
      color: colors.blueAccent[300],
      display: 'flex',
      alignItems: 'center'
    },
    '& .edit-column--cell  .MuiSvgIcon-root': {
      fill: colors.greenAccent[300]
    },
    '& .delete-column--cell  .MuiSvgIcon-root': {
      fill: colors.redAccent[400]
    },
    '& .MuiDataGrid-footerContainer': {
      borderTop: 'none',
      backgroundColor: colors.greenAccent[600]
    }
  };
};
