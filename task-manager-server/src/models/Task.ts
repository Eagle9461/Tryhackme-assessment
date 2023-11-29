import mongoose, { Document } from 'mongoose';

interface Task extends Document {
  title: string;
  description: string;
  status: string;
}

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

export default mongoose.model<Task>('Task', taskSchema);
