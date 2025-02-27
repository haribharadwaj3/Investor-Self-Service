const express = require("express")
const app=express()
app.use(express.json())
const path=require("path")
const cors = require('cors');
app.use(cors());
const router=require('./routes/user.js')
const connection=require('./mongodb.js')
connection()
app.use('/user',router)
app.listen(3000,()=>{
console.log("port connected")}
)