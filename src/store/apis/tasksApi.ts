import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TaskApiResponse} from '@/interfaces/taskApiResponse.interface';

const tasksApi = createApi({
  reducerPath: 'tasks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1/tasks'
  }),
  endpoints(builder) {
    return {
      getAllTasks: builder.query<TaskApiResponse, void>({
        query: () => ({
          url: '/',
          method: 'GET'
        })
      }),
      getTaskById: builder.query({
        query: ({id}) => ({
          url: `/${id}`,
          method: 'GET'
        })
      }),
      createTask: builder.mutation({
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
        query: (task) => ({
          url: `/${task._id}`,
          method: 'PUT',
          body: JSON.stringify(task)
        })
      }),
      updateTaskStatus: builder.mutation({
        query: (task) => ({
          url: `/${task._id}`,
          method: 'PATCH',
          body: JSON.stringify({status: task.status})
        })
      }),
      deleteTask: builder.mutation({
        query: (task) => ({
          url: `/${task._id}`,
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
