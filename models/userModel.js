const mongoose=require('mongoose')
 const userSchema=new mongoose.Schema({
    name:{
        type:String,
        Required:true,
        unique:true
    },
    email:{
        type:String,
        Required:true,
        unique:true
    },
    password:{
        type:String,
        Required:true,
    },
    img:{
        type:String,
    },
    subscriber:{
        type:Number,
    },
    subscribeduser:{
        type:Number,
    }   
 },{timestamp:true})

 module.exports=mongoose.model('User',userSchema)