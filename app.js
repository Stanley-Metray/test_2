const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello world");
});

app.get("/home", (req,res)=>{
    res.setHeader("Content-Type", "text/html");
    res.status(200).send("We are in home page");
});

app.listen(5000, (err)=>{
    if(err)
        return console.log(err);

    console.log("Server is running perfectly");
});