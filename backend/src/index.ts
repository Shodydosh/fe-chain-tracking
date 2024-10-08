import express, { Request, Response } from 'express';
import addressRouter from './routes/address.routers';
import { errorHandler } from './middleware/errorHandler.middleware';
import 'dotenv/config';
const app = express();
const port: number = 3002;

// const cors = require('cors');
import cors from 'cors'
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Node.js + Express!');
});
app.use('/address/', addressRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});