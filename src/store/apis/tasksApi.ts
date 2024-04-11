import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TaskApiResponse} from '@/interfaces/taskApiResponse.interface';

const tasksApi = createApi({
  reducerPath: 'tasks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://todo-app-server-2q1qqul12-solomiias-projects-c8cf0fed.vercel.app/api/v1/tasks'
  }),
  tagTypes: ['Task'],
  endpoints(builder) {
    return {
      getAllTasks: builder.query<TaskApiResponse, void>({
        providesTags: ['Task'],
        query: () => ({
          url: '/',
          method: 'GET'
        })
      }),
      getTaskById: builder.query({
        providesTags: ['Task'],
        query: ({id}) => ({
          url: `/${id}`,
          method: 'GET'
        })
      }),
      createTask: builder.mutation({
        invalidatesTags: ['Task'],
        query: (task) => {
          delete task._id;
          return {
            url: '/',
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          };
        }
      }),
      updateTask: builder.mutation({
        invalidatesTags: ['Task'],
        query: (task) => ({
          url: `/${task._id}`,
          method: 'PUT',
          body: JSON.stringify(task),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
      }),
      updateTaskStatus: builder.mutation({
        query: ({_id, status}) => {
          return {
            url: `/${_id}`,
            method: 'PATCH',
            body: JSON.stringify({status}),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          };
        }
      }),
      deleteTask: builder.mutation({
        invalidatesTags: ['Task'],
        query: (id) => ({
          url: `/${id}`,
          method: 'DELETE'
        })
      })
    };
  }
});

export const {
  useGetAllTasksQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useUpdateTaskStatusMutation,
  useDeleteTaskMutation
} = tasksApi;
export {tasksApi};
