const mongoose=require('mongoose')
const database=async()=>{
mongoose.connect("mongodb://localhost:27017/ISS").then( ()=>{
    console.log("successfully connected")
})
.catch( ()=>{
    console.log("not connected")
})}
module.exports=database