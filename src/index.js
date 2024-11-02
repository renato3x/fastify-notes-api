import dotenv from 'dotenv';

dotenv.config();

import app from './app';

app.listen({
  host: process.env.SERVER_HOST || 'localhost',
  port: 3000,
});
