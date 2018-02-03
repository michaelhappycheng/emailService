const passport = require('passport')

module.exports = (app) => {
  app.get(  
    '/auth/google',     
    passport.authenticate('google',{
      scope : ['profile', 'email']
    })
  )
  
  //we already get the code, which is obtained from google+ oauth
  app.get('/auth/google/callback', passport.authenticate('google'))

  //when a user hit /api/logout he's logged out
  //logout is one of the property pass port has for req
  app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user)
  })

                              //error callback function
  app.get('/api/current_user', (req, res) => {
    // res.send(req.session)
    res.send(req.user)
  })
}
