const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/authrouter');
const noteRouter = require('./routes/noterouter');
require('dotenv').config();
require('./config/db');


const PORT = process.env.PORT || 1077;
const REQUESTPORT = process.env.REQUEST_PORT;

app.use(bodyparser.json());
app.use(cors({
 origin: REQUESTPORT,
  credentials: true
}));
app.use('/auth', authRouter)
app.use('/note', noteRouter)

app.listen(PORT, ()=>{
console.log(`Server running ${PORT}`);
})