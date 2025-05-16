
const mongoose = require('mongoose');
const mongo_url = process.env.MONGODB_URL;

mongoose.connect(mongo_url).then(()=>{
   console.log("Successfully connected to MongoDB.");
}).catch(()=>{
 console.log("Error: MongoDB connection failed.");
})


