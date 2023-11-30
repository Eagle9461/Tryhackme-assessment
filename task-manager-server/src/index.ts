import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {connectDB} from './config';
import {router} from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use('/api/tasks', router);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  },
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
