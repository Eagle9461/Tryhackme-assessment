import axios from 'axios';
import { ITask } from '../types'; 

const baseUrl = 'http://localhost:3001/api/tasks/';

export const fetchTasks = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const createTask = async (newTask: ITask) => {
  const response = await axios.post(baseUrl, newTask);
  return response.data;
};
