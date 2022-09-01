const express=require('express');
const app=express();
const mongoose=require('mongoose')
const proc=require('dotenv')
proc.config();
mongoose.connect(process.env.mongo)

let port=4000;

app.use('/user',require('./routes/userRoute'))
app.use(express.json())

app.listen(port,console.log("server is h running on port : ",port));