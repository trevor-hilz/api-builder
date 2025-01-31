import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'apibuilder',
  password: 'LeMaVor89',
  port: 5432,
});

pool
  .connect()
  .then(() => console.log('connected to PostgreSQL'))
  .catch((err) => console.error('Connection error: ', err));

export default pool;
