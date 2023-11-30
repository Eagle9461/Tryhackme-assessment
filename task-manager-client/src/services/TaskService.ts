import axios from 'axios';
import { IPaginatedTasks, ITask } from '../types'; 

const baseUrl = 'http://localhost:3001/api/tasks/';

export const fetchTasks = async (page: number, limit: number = 10): Promise<IPaginatedTasks> => {
  const response = await axios.get(baseUrl, {params: { page, limit }});
  return response.data;
};

export const createTask = async (newTask: ITask) => {
  const response = await axios.post(baseUrl, newTask);
  return response.data;
};
