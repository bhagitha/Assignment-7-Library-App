const express = require('express');
const authorRouter=express.Router();

function router(nav){
var authors = [
    {
        title:"Paulo Coelho",
        author:"The Alchemist",
        genre:"Graphic Novel",
        img:"author1.jpeg"
    },
    {
        title:"Chetan Bhagat",
        author:"India Positive",
        genre:"Fiction",
        img:"author2.jpeg"
    },
    {
        title:"A P J Abdul Kalam",
        author:"Wings of fire",
        genre:"Auto biography",
        img:"author3.jpeg"
    },
    {
        title:"Bahseer",
        author:"pathummayude aad",
        genre:"Novel",
        img:"author4.jpeg"
    }
]
authorRouter.get('/',function(req,res){
     res.render("author",
        {
            nav,
            title:'Authors',
            authors//array
        });
    });



    return authorRouter;
}

module.exports = router;