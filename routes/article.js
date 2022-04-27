const express=require("express");
const mongoose=require("mongoose");
const article=express.Router();

article.get("/new",(req,res)=>{
res.render("articles/new");
});

article.get("/edit",async(req,res)=>{
    _id=req.query._id;
    const article1=await mongoose.model("Article").findById({_id:_id});
    //console.log(article1);

    await res.render("articles/editArticle",{article:article1});
    });
    article.post("/editArticle",async(req,res)=>{
        _id=req.query._id;
        console.log(_id);
        const title=req.body.title;
        const des=req.body.des;
        const article1=await mongoose.model("Article").findByIdAndUpdate({_id:_id},{
title:title,
des:des
        });
    
        await res.redirect("/");
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
   // console.log(recent);
   // const art=JSON.parse(article)
    await res.render("articles/showArticle",{article:article,recent:recent});
})

module.exports=article;