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
  };
};
