const express = require('express')
const mongoose=require('mongoose') ;
const dotenv=require("dotenv") ;
const app = express()
const port = 8800;
const userRoute= require("./routes/users") ; 
const pinRoute= require("./routes/pins") ;

dotenv.config() ;

app.use(express.json()) ;

mongoose.connect(process.env.mongourl)
.then(()=>{
console.log("Mongodb connected") ;
}) 
.catch((error)=> console.log(error)) ;

app.use("/api/users",userRoute) ;
app.use("/api/pins",pinRoute) ;

app.listen(port, () => {
  console.log("backend server is running") ;
})