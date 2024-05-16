const express = require("express");
const path = require('path');

const app = express();

const filePath = path.join(__dirname, "./views");

// const filePath = path.join(__dirname, "./", "index.html");
// const filePath2 = path.join(__dirname, "./", "about.html");

app.get('/', (req, res)=>{
    console.log(req.url);
    res.sendFile(filePath+"/index.html");
});

app.get("/contact", (req, res)=>{
    console.log(req.url);
    res.sendFile(filePath+"/contact.html");
});

app.get("/about", (req, res)=>{
    console.log(req.url);
    res.sendFile(filePath+"/about.html");
});


app.listen(3000, (err)=>{
    if(err)
        return console.log(err);

    console.log("Server is running on port 3000");
});