import express, { Router } from 'express';
import * as taskController from '../controllers';

const router: Router = express.Router();

router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router;
