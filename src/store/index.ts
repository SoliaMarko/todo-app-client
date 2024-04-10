import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {tasksApi} from './apis/tasksApi';
import {tasksReducer} from './slices/tasksSlice';
import {filterReducer} from './slices/filterSlice';
import {confirmationReducer} from './slices/confirmationSlice';

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
    tasksSlice: tasksReducer,
    filters: filterReducer,
    confirmation: confirmationReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(tasksApi.middleware)
});

setupListeners(store.dispatch);

export {
  useGetAllTasksQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useUpdateTaskStatusMutation,
  useDeleteTaskMutation
} from './apis/tasksApi';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
