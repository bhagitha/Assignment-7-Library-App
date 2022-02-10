const express = require('express');

const app =  express();
const nav = [
    {
        link:'/',name:'Home'
    },
    {
        link:'/books',name:'Books'
    },         
    {
        link:'/author',name:'Authors'
    }

];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');

app.use('/books',booksRouter); //router
app.use('/author',authorRouter); //router
app.use('/login',loginRouter); //router
app.use('/SignUp',signupRouter); //router
app.use('/admin',adminRouter); //router

app.get('/',function(req,res){
    req.flash('heloooo');
 res.render("index",
    {
        nav,
        nav1:[
            {link:'/admin',name:'AddBook'},
            {link:'/login',name:'Login'},
             {link:'/SignUp',name:'SignUp'}],
        title:'Library'
    });
});

app.listen(5001,()=>{
    console.log("Started on Port 5001 ")
});