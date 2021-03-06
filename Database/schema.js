const express=require("express");
const mongoose=require("mongoose");

const schema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    },
    mark:
    {
        type:String,
        required:true
    },
    month:{
      type:String,
      required:true
    },
    img:{
        type:String,
        default:"12456",
    },
    demodes:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

/*schema.methods={
    findActive: ()=>{
        return mongoose.model("ToDo").find({status:"active"}).clone().catch(err=>console.log(err));
    },
}

schema.statics={
    findInActive:function()
    {
        return this.find({status:"inactive"});
    }
}

schema.query={
    byLeaugue: function()
    {
        return this.find({title:"Premier League"})
    }
}

*/
module.exports=schema;