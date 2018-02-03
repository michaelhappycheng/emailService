const mongoose = require('mongoose')
// const Schema = mongoose.Schema
//destructuring mongoose has a property called Schema, assign it to a variable called Schema
const { Schema } = mongoose

//mongoose wants to know all property all records will have 
const userSchema = new Schema({
  googleId : String
})

// create a new collection 'users' with schema userSchema
mongoose.model('users', userSchema);