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

app.get("/contact", (req, res)=>{
    res.sendFile(filePath+"/contact.html");
});

app.get("/about", (req, res)=>{
    res.sendFile(filePath+"/about.html");
});

// form data or sensitive data

app.post('/user', (req, res)=>{
    res.status(200).json({firstName : req.body.firstName});
});

// query parameters

app.get("/user", (req, res)=>{
    res.status(200).json(req.query);
});

// Query params

app.delete('/user/:id/:name', (req, res)=>{
    console.log(req.params);
    res.status(200).json(req.params);
})

// query parameters and parameters

app.get("*", (req, res)=>{
    res.send("Page Doesnot exists...");
});


app.listen(3000, (err)=>{
    if(err)
        return console.log(err);

    console.log("Server is running on port 3000");
});