import {createSlice} from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: []
  },
  reducers: {}
});

export const tasksReducer = tasksSlice.reducer;
