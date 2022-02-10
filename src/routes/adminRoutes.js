const express = require('express');
const adminRouter=express.Router();
const Bookdata=require('../model/Bookdata');

function router(nav){

    adminRouter.get('/',function(req,res){
     res.render("addbook",
        {
            nav,
            title:'Add Book',
        });
    });

    adminRouter.post('/add',(req,res)=>{
        var item = {
                    title: req.body.title,
                    author: req.body.author,
                    genre: req.body.genre,
                    image: req.body.image
                }
               var book = Bookdata(item);
               book.save();
               res.redirect('/books')
               });

adminRouter.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    Bookdata.findOne({_id:id})
   .then(function(book){
    res.render("editbook",
    {
        nav,
        title:'edit Book',
        book
    });
});
});
adminRouter.post('/update/:id',(req,res)=>{
   
    const id = req.params.id;
    var item = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        image: req.body.image
    }
        Bookdata.findByIdAndUpdate(id,item,function(err,docs){
            if(err){
                console.log(err)
            }else{
                console.log("updated  user : ",docs)
            }

        });
    res.redirect('/books')
   
   });
   adminRouter.post('/delete/:id',(req,res)=>{
   
   const id=req.params.id;
        Bookdata.findByIdAndDelete(id,function(err,docs){
            if(err){
                console.log(err)
            }else{
                console.log(" Deleted : ",docs)
            }

        });
    res.redirect('/books')
   
   });

    return adminRouter;
}

module.exports = router;