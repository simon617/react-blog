const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/admin?readPreference=primary&appname=MongoDB%20Compass&ssl=false', 
{useNewUrlParser:true}).then(() => console.log('DB connected'))
                                    .catch(err => console.error(err));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(5000);

//Create the model : name of the Collection, inital schema
const User = mongoose.model('User', userSchema)

module.exports = {User}