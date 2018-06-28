const router = require('express').Router();

//auth login vermutlich nicht nötig! 
router.get('/login',(req,res)=>{
    res.render('login');
});


//auth logout vermutlich nicht nötig
router.get('/logout', (req,res)=> {
    //handle with passport
    res.send('logging out');
})


//auth with google 
router.get('/google', (req,res)=> {
    //handle wie passport
    res.send('loggin in with google');
});

module.export = router;