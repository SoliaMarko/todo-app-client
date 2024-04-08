import {PaletteColorScale} from '@/interfaces/globalInterfaces/colorsScale.interface';
import {CSSSelectorStyles} from '@/types/cssSelectorStyles.type';

export const useTableStyles = (colors: PaletteColorScale): CSSSelectorStyles => {
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
    '& .priority-column--cell': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      paddingLeft: '50px'
    },
    '& .priority-column--cell > *': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    '& .tags-column--cell': {
      color: colors.blueAccent[300],
      display: 'flex',
      alignItems: 'center'
    },
    '& .MuiDataGrid-footerContainer': {
      borderTop: 'none',
      backgroundColor: colors.greenAccent[600]
    }
  };
};
