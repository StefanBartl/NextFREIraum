import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const User = new Schema({
  id: {type: String},  
  username: {type: String, minLength: 3, maxLength: 20},
  password: {type: Number, min: 8},
  firstname: {type: String},
  lastname: {type: String},
  birthdate: {type: Date},
  email: {type: String},
  last_login: {type: Date, default: Date.now},
  register_date: {type: Date}
});

module.exports = mongoose.model( 'UserModel', User );