const express = require("express");
const path = require('path');
console.clear();
const app = express();

const filePath = path.join(__dirname, "./views");

// const fun1 = (req, res, next)=>{
//     const url = req.url;
//     console.log(req.url);

//     if(url==="/" || url==="/contact" || url==="/about")
//         next();
//     else
//         res.send("404, Page Not Found!");
// }

// app.use(fun1);


// app.get('/', fun1,(req, res)=>{
//     res.sendFile(filePath+"/index.html");
// });

// app.get("/contact", (req, res)=>{
//     res.sendFile(filePath+"/contact.html");
// });

// app.get("/about", (req, res)=>{
//     res.sendFile(filePath+"/about.html");
// });

// app.get("*", (req, res)=>{
//     res.send("Page Doesnot exists...");
// });


// app.listen(3000, (err)=>{
//     if(err)
//         return console.log(err);

//     console.log("Server is running on port 3000");
// });


// Serving JS and CSS file

// serving javascript file 
app.use("/script", express.static(path.join(__dirname, "./", "/script")));

// serving css file 

app.use('/css', express.static(path.join(__dirname, "./", "/css")));

// Serving bootstrap

app.use('/css', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css")));

app.use("/contact", (req, res, next)=>{
    console.log("Middleware executed for "+req.url);
    next();
});

app.get('/', (req, res)=>{
    res.sendFile(filePath+"/index.html");
});

app.get("/contact", (req, res)=>{
    res.sendFile(filePath+"/contact.html");
});

app.get("/about", (req, res)=>{
    res.sendFile(filePath+"/about.html");
});

app.get("*", (req, res)=>{
    res.send("Page Doesnot exists...");
});


app.listen(3000, (err)=>{
    if(err)
        return console.log(err);

    console.log("Server is running on port 3000");
});