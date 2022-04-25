
const express=require("express");
const article=require("./routes/article");
const app=express();
app.set("view engine","ejs");
app.use("/article",article);
app.use(express.static(__dirname+'/public'))
app.get("/",(req,res)=>{
res.render("index");
});

app.listen(3000,()=>console.log("listening"));
