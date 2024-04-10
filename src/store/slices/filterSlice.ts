import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  search: '',
  status: [],
  priority: [],
  from: null,
  to: null
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action) {
      return {...state, ...action.payload};
    },
    resetFilters() {
      return initialState;
    }
  }
});

export const {setFilters, resetFilters} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
