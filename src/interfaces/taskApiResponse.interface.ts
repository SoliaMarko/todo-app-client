import {ApiTaskRow} from './apiTaskRow.interface';

export interface TaskApiResponse {
  success: boolean;
  data: ApiTaskRow[];
}
