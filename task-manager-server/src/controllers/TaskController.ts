import { Request, Response } from 'express';
import {TaskRepository} from '../repositories';

export async function createTask(req: Request, res: Response) {
    try {
      const task = await TaskRepository.create(req.body);
      res.status(201).send(task);
    } catch (error) {
      if (error instanceof Error) {
          res.status(500).send({ message: error.message });
      } else {
          res.status(500).send({ message: "An unknown error occurred" });
      }
  }
}

export async function getAllTasks(req: Request, res: Response) {
    try {
        const tasks = await TaskRepository.findAll();
        res.status(200).send(tasks);
    } catch (error) {
      if (error instanceof Error) {
          res.status(500).send({ message: error.message });
      } else {
          res.status(500).send({ message: "An unknown error occurred" });
      }
  }
}

export async function getTask(req: Request, res: Response) {
    try {
        const task = await TaskRepository.findById(req.params.id);
        if (!task) {
            return res.status(404).send({ message: 'Task not found' });
        }
        res.status(200).send(task);
    } catch (error) {
      if (error instanceof Error) {
          res.status(500).send({ message: error.message });
      } else {
          res.status(500).send({ message: "An unknown error occurred" });
      }
  }
}

export async function updateTask(req: Request, res: Response) {
    try {
        const task = await TaskRepository.update(req.params.id, req.body);
        if (!task) {
            return res.status(404).send({ message: 'Task not found' });
        }
        res.status(200).send(task);
    } catch (error) {
      if (error instanceof Error) {
          res.status(500).send({ message: error.message });
      } else {
          res.status(500).send({ message: "An unknown error occurred" });
      }
  }
}

export async function deleteTask(req: Request, res: Response) {
    try {
        const task = await TaskRepository.delete(req.params.id);
        if (!task) {
            return res.status(404).send({ message: 'Task not found' });
        }
        res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
          res.status(500).send({ message: error.message });
      } else {
          res.status(500).send({ message: "An unknown error occurred" });
      }
  }
}
