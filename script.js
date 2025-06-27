//MAKING OUR FIRST SERVER WITH EXPRESS.JS
const express = require("express");
const app = express();
let port = 3000;
app.use("/",(req,res)=>{
    res.send("THIS IS MY FIRST BACKEND SERVER!");
})
// app.get("/about",(req,res)=>{
//     res.send("THIS IS ABOUT-US PAGE!");
// })
// app.get("/services",(req,res)=>{
//     res.send("THIS IS SERVICES PAGE!");
// })
//app.get("/resources",(req,res)=>{
//     res.send("THIS IS RESOURCES PAGE!");
// })
// app.get("/components",(req,res)=>{
//     res.send("THESE ARE COMPONENTS!");
// })
// app.get('*',(req,res)=>{
//     res.send("THIS IS A WRONG ROUTE!");
// })
// app.post("/apple",(req,res)=>{
//      res.send("THIS IS APPLE.");
//  })
// app.put("/orange",(req,res)=>{
//      res.send("THIS IS ORANGE!");
//  })
app.listen(port,()=>{
    console.log(`WELCOME, YOU ARE AT PORT ${port}`);
})


ANOTHER ROUND:
// const express = require("express");
// const app = express();
// let port = 3000;
// app.use("/",(req,res)=>{
//     res.send("hey, im sujal!");
// });
// app.get("/about",(req,res)=>{
//     res.send("this is about route.");
// });
// app.get("/services",(req,res)=>{
//    res.send("This is services route!");
// });
// app.get("/home",(req,res)=>{
//     res.send("HELLOW, THIS IS MIA BHAI");
// });
// app.post("/login",(req,res)=>{
//     res.send("THIS IS POST ROUTE.");
// });
// app.get("/services",(req,res)=>{
//     res.send("our services");
// });
// app.get("/signup",(req,res)=>{
//     res.send("Please signup!");
// });
// app.get("/demo",(req,res)=>{
//     res.send("take a demo...");
// });
// app.listen(port,()=>{
//     console.log("171717717117");
// })
