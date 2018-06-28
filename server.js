const express = require('express')
const app = express()
const passport = require('passport')
const authRoutes = require ('./routes/auth-routes');

const profileRoutes = require ('./routes/profile-routes');
const passportSetup = require ('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,()=>{
  console.log('connected to mongodb');
});

app.set('view engine','ejs');
app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys:[keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//app.use(express.static('./client/build'))
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

app.get('/',(req,res)=>{
  res.render('home',{user: req.user});
});


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
  

app.listen(5000, () => console.log('Server listening on port 5000!'))
