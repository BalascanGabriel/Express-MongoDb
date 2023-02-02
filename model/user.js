const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


const User = mongoose.model('User', userSchema);

module.exports = User;

//Model sunt fields din db

/*This user.js model defines the schema for a User, including the name, email, and password fields.
 The pre hook is used to hash the password before saving it to the database.
  The comparePassword method is used to compare a candidate password with the hashed password stored in the database.
   This model uses the Mongoose library to interact with a MongoDB database.*/