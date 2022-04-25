const express=require("express");

const article=express.Router();

article.get("/new",(req,res)=>{
res.render("articles/new");
});

module.exports=article;