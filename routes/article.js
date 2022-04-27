const express=require("express");
const mongoose=require("mongoose");
const article=express.Router();

article.get("/new",(req,res)=>{
res.render("articles/new");
});

article.get("/:id",async (req,res)=>{
    const article=await mongoose.model("Article").findById({_id:req.params.id});
     let date=new Date();
     let month=date.getMonth();
    const recent=await mongoose.model("Article").find({month:month});
    console.log(recent);
   // const art=JSON.parse(article)
    await res.render("articles/showArticle",{article:article,recent:recent});
})

module.exports=article;