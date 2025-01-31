import express, { response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import requestRouter from './router.js';
import cors from 'cors';
import 'dotenv/config';

const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());

const corsOptions = {
  origin: '*',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/request', requestRouter);

app.get('*', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(port, (err) => {
  console.log(`server listening on port ${port}`);
});
