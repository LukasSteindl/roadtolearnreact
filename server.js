const express = require('express')
const app = express()
const passport = require('passport')
const authRoutes = require ('./routes/auth-routes');
app.set('view engine','ejs');
//app.use(express.static('./client/build'))
app.use('/auth',authRoutes);

app.get('/',(req,res)=>{
  res.render('home');
});


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

 



 // app.post('/login',  passport.authenticate('local'),
 // function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
 //   res.redirect('/users/' + req.user.username);
 // });
  

app.listen(5000, () => console.log('Server listening on port 5000!'))
