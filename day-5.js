const express = require("express");
const path = require('path');
console.clear();
const app = express();

const filePath = path.join(__dirname, "./views");

// const filePath = path.join(__dirname, "./", "index.html");
// const filePath2 = path.join(__dirname, "./", "about.html");

app.use('/css', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css")));
app.use("/script",express.static(path.join(__dirname, "./script")));
app.use("/css",express.static(path.join(__dirname, "./css")));

app.get('/', (req, res)=>{
    res.sendFile(filePath+"/index.html");
});

app.get("/contact", (req, res)=>{
    res.sendFile(filePath+"/contact.html");
});

app.get("/about", (req, res)=>{
    res.sendFile(filePath+"/about.html");
});


app.listen(3000, (err)=>{
    if(err)
        return console.log(err);

    console.log("Server is running on port 3000");
});