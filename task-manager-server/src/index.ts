import express from 'express';
import bodyParser from 'body-parser';
import {connectDB} from './config';
import {router} from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use('/api/tasks', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
