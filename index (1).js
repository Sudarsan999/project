const express = require('express');

 

const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

 
app.post("/post",(req,res)=>{
   console.log("inside post function");
   console.log(req.body)
   res.send("Thanks For Publishing")


    
})
app.get("/",(req,res)=>{
    res.send("sudarsan")
})

 
    app.listen(3000,()=>{
        console.log("hello running ");
         
    });
 