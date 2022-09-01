const express=require('express')
const route=express.Router()
const{ signup, signin }=require('../controller/user')
route.get('/signup',signup)
route.get('/signin',signin)

module.exports=route