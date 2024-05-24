const express = require("express");
const path = require('path');
const bodyParse = require('body-parser');
console.clear();
const app = express();


const filePath = path.join(__dirname, "./views");

app.use("/script", express.static(path.join(__dirname, "./", "/script")));

// serving css file

app.use('/css', express.static(path.join(__dirname, "./", "/css")));

// Serving bootstrap

app.use('/css', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css")));

app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());


app.get('/', (req, res)=>{
    res.sendFile(filePath+"/index.html");
});

app.listen(3000, (err)=>{
    if(err)
        return console.log(err);

    console.log("Server is running on port 3000");
});