const express=require("express");
const mongoose=require("mongoose");
const article=express.Router();

article.get("/new",(req,res)=>{
res.render("articles/new");
});

article.get("/:id",async (req,res)=>{
    const article=await mongoose.model("Article").findById({_id:req.params.id})
   // const art=JSON.parse(article)
    await res.render("articles/showArticle",{article:article});
})

module.exports=article;