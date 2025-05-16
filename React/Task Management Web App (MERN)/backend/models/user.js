const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = schema(
{
  email:{
    required: true,
    type: String,
    unique: true,
  },
  password:{
    required: true,
    type: String,
    unique: true,
  }
}
);

const UserModel = mongoose.model(process.env.USERAUTHDATABASE,UserSchema);
module.exports = UserModel;