import { Request, Response } from 'express';
import {TaskRepository} from '../repositories';
import { TaskService } from '../service';

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
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const { paginatedData, nextPage } = await TaskService.fetchPaginatedData(page, limit);

        
        res.status(200).send({
          data: paginatedData,
          pageNumber: nextPage
        });
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
