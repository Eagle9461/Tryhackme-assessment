import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {connectDB} from './config';
import {router} from './routes';
import { errorHandlerMiddleware } from './middleware';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use('/api/tasks', router);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
