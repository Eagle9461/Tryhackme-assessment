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

export const getTask = async (_id: string) => {
  const response = await axios.get(`${baseUrl}${_id}`);
  return response.data;
};

export const updateTask = async ({_id, updatedTask}: {_id: string, updatedTask: ITask}) => {
  const response = await axios.put(`${baseUrl}${_id}`, updatedTask);
  return response.data;
};

export const deleteTask = async (_id: string) => {
  const response = await axios.delete(`${baseUrl}${_id}`);
  return response.data;
};
