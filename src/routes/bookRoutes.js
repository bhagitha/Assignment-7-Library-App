const express = require('express');
const booksRouter=express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
// var books = [
//     {
//         title:"The Alchemist",
//         author:"Paulo Coelho",
//         genre:"Graphic Novel",
//         img:"book1.jpeg"
//     },
//     {
//         title:"India Positive",
//         author:"Chetan Bhagat",
//         genre:"Fiction",
//         img:"book2.jpeg"
//     },
//     {
//         title:"Wings of fire",
//         author:"A P J Abdul Kalam",
//         genre:"Auto biography",
//         img:"book3.jpeg"
//     },
//     {
//         title:"pathummayude aad",
//         author:"Bahseer",
//         genre:"Novel",
//         img:"book4.jpeg"
//     }
// ]
booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render("books",
        {
            nav,
            title:'Books',
            books
        });
    });
    
});

booksRouter.get('/:id',function(req,res){
   const id = req.params.id;
   Bookdata.findOne({_id:id})
   .then(function(book){
        res.render("book",
        {
            nav,
            title:'Book',
            book
        });
    });
   
});
    booksRouter.get('/admin',function(req,res){
       
         res.render("addbook",
             {
                 nav,
                 title:'Add Book',
                // book: books[id]
             });
         });
     
    return booksRouter;
}

module.exports = router;