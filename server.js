const express = require('express')
const app = express()
const passport = require('passport')

app.use(express.static('./build'))
app.get('/', (req, res) => res.send('Hello World!'))




  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

  app.post('/login',  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });
  

app.listen(5000, () => console.log('Example app listening on port 5000!'))
