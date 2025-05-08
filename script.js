//MAKING OUR FIRST SERVER WITH EXPRESS.JS
const express = require("express");
const app = express();
let port = 3000;
app.use("/",(req,res)=>{
    res.send("THIS IS MY FIRST BACKEND SERVER!");
})
app.listen(port,()=>{
    console.log(`WELCOME, YOU ARE AT PORT ${port}`);
})
