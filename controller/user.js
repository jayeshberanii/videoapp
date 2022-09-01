const bcrypt=require('bcrypt');
const { default: mongoose } = require('mongoose');

const User =require('../models/userModel')

//sign up
const signup= async(req,res)=>{

    const salt=bcrypt.genSaltSync(10);
    req.body.password=bcrypt.hashSync(req.body.password,salt)
   const user= await User.create(req.body);
   res.send(user)
}

//sign in
const signin=async(req,res)=>{
    const user={
        email:"j@.com",
        password:"jayesh123"
    }
    // const user1=await User.findOne(user.email)
    // res.send(user1)
    const pass=bcrypt.compare(user.password,User.password)
   if(pass)
   {
       res.send('login successfully !!!')
   }else{
       res.send('incorect')
   }
}
// google auth

module.exports={
    signup,
    signin
}