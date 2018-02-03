const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/key')
const cookieSession = require('cookie-session')
const passport = require('passport')
// don't need const passport because we are not using it, just for execution sake
require('./models/User')
// note the order between passport and User matters
require('./services/passport')  

mongoose.connect(keys.mongoURI)
const app = express()


/*
app.use wire up the middlewares (cookie-session, passport)
  good for checking every req handler (you can also only get a portion of your req handler)

*/

//tell express to make use of cookie session with passport
app.use(
  // build a configuration object
  cookieSession({
    maxAge : 30 * 24 * 60 * 60 * 1000,  //last 30 days
    keys : [keys.cookieKey],             //make sure you use the cookie key and not all the key

  })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)


// if heroku didn't assign the port, use 5000
const PORT = process.env.PORT || 5000    
app.listen(PORT)