const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/authrouter');
require('dotenv').config();
require('./config/db');


const PORT = process.env.PORT || 1077;

app.use(bodyparser.json());
app.use(cors({
  origin: REQUESTPORT,
  credentials: true
}));
app.use('/auth', authRouter)

app.listen(PORT, ()=>{
console.log(`Server running ${PORT}`);
})