const express=require("express");
const mongoose=require("mongoose");
const article=express.Router();

article.get("/new",(req,res)=>{
res.render("articles/new");
});

article.get("/delete",async(req,res)=>{
   let  _id=req.query._id;
    console.log(_id);
   await mongoose.model("Article").deleteOne({_id:_id});
    res.redirect("/");
})

article.get("/:id",async (req,res)=>{
    console.log("Bhag Bhosdile")
    const article=await mongoose.model("Article").findById({_id:req.params.id});
     let date=new Date();
     let month=date.getMonth();
    const recent=await mongoose.model("Article").find({month:month});
    console.log(recent);
   // const art=JSON.parse(article)
    await res.render("articles/showArticle",{article:article,recent:recent});
})

module.exports=article;