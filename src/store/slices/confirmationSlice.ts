import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  confirmInfo: '',
  isOpen: false,
  isConfirmed: false,
  onConfirm: () => {},
  id: ''
};

const confirmationSlice = createSlice({
  name: 'confirmation',
  initialState,
  reducers: {
    setConfirmation(state, action) {
      return {...state, ...action.payload};
    },
    resetConfirmation() {
      return initialState;
    }
  }
});

export const {setConfirmation, resetConfirmation} = confirmationSlice.actions;
export const confirmationReducer = confirmationSlice.reducer;
