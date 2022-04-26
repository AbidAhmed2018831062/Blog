const { diskStorage } = require("multer");
const multer = require("multer");
const path = require("path");

var up;

let  _id;
const uplo="G:/ProjectsExpress/Blog/uploads";

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uplo);
    },
    filename:(req,file,cb)=>{
        //console.log(req);
        const ext=path.extname(file.originalname);
        const fileNa=file.originalname.replace(ext,"").split(" ").join("-");
        up._id=fileNa+ext;
        console.log(_id);
        cb(null,fileNa+ext);



    }
})

 up=multer({
    storage:storage,
    limits:100000,
    fileFilter:(req,file,cb)=>{
       up.hey=file;
       up._id=_id;
        if(file.fieldname==="avatar")
        {
            if(file.mimetype==="image/jpg"||file.mimetype==="image/jpeg"||file.mimetype==="image/png")
            {
                //console.log("Hey i am here")
                cb(null,true);
            }
            else
            cb(new Error("Only jpg, jpeg, and png format allowed"))
        }
        else
        {
            if(file.mimetype==="application/pdf")
            {
                cb(null,true);
            }
            else
            cb(new Error("Only pdf format allowed"))
        }
    }
});

module.exports=up;