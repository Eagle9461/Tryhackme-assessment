import express from 'express';
import connectDB from './config/db';

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
