const express=require("express");
const mongoose=require("mongoose");
const schme=require("./Database/schema");
const article=require("./routes/article");
const multer=require("multer");
const multer1=require("./routes/fileUpload");
const { _id } = require("./routes/fileUpload");
const app=express();

const art=new mongoose.model("Article",schme);
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost/article",{

}).then(()=>console.log("Connection successful")).catch(err=>console.log(err));
app.use(express.urlencoded({extended:false}))
app.use("/article",article);
app.use(express.static(__dirname+'/public'));

app.use("/js",express.static(__dirname+'/public/js'))
app.get("/",async(req,res)=>{
  const article1=await art.find();
    //console.log(article1);
    article1.reverse();
await res.render("index",{article:article1});
});



app.post("/",multer1.array("avatar",3),async(req,res)=>{
   
   
    console.log(multer1._id+"Abid");
    let date=new Date();
    let month=date.getMonth();
    const showDes=req.body.des.substr(0,400);
    const demoDes=showDes+"...";
   // console.log(demoDes);
    const a = new art({
    title:req.body.title,
    des:req.body.des,
    mark:req.body.mark,
    demodes:demoDes,
    img:multer1._id,
    month:month
});
//console.log(a);
const d=await a.save();
if(d)
{
    res.redirect(`/article/${d._id}`);
}
});
app.use((err,req,res,next)=>{
    if(err){
    if(err instanceof multer.MulterError){
        console.log(err);
        res.status(500).send(err.message);
    }
    
    else{
        res.status(500).send(err.message);
    }
}
else
res.send("Successful")
});
app.listen(3000,()=>console.log("listening"));
