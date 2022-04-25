
const express=require("express");
const mongoose=require("mongoose");
const schme=require("./Database/schema");
const article=require("./routes/article");
const app=express();

const art=new mongoose.model("Article",schme);
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost/article",{

}).then(()=>console.log("Connection successful")).catch(err=>console.log(err));
app.use(express.urlencoded({extended:false}))
app.use("/article",article);
app.use(express.static(__dirname+'/public'))
app.get("/",async(req,res)=>{
  const article1=await art.find();
    //console.log(article1);
    article1.reverse();
await res.render("index",{article:article1});
});



app.post("/",async(req,res)=>{
    console.log("Hello");

    const showDes=req.body.des.substring(0,400);
    const demoDes=showDes+"...";
   // console.log(demoDes);
    const a = new art({
    title:req.body.title,
    des:req.body.des,
    mark:req.body.mark,
    demodes:demoDes,
});
console.log(a);
const d=await a.save();
if(d)
{
    res.redirect(`/article/${d._id}`);
}
});

app.listen(3000,()=>console.log("listening"));
