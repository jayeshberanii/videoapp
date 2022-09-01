const mongoose=require('mongoose')
 const commentSchema=new mongoose.Schema({
    userid:{
        type:String,
        Required:true,
        unique:true
    },
    videoid:{
        type:Number,
        Required:true,
        unique:true
    },
    desc:{
        type:String,
        Required:true,
    }  
 },{timestamp:true})

 module.exports=mongoose.model('Comment',commentSchema)