const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

const PORT = process.env.PORT || 1077;
const REQUESTPORT = process.env.REQUEST_PORT;

app.use(bodyparser.json());
app.use(
  cors({
    origin: REQUESTPORT,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use('/api/tasks', taskRoutes);
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || 'Internal Server Error' });
});
app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
