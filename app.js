const fs = require('fs');
const user = {
    name : "Veeresh",
    city : "Bidar"
}

// Sync Write

fs.writeFileSync("test.txt", JSON.stringify(user));

// Async Write

fs.writeFile("test.txt", JSON.stringify(user), (err)=>{
    if(err)
        return console.log(err);
});

// Sync Read
const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);

// Async 

fs.readFile("test.txt", "utf-8", (err, data)=>{
    if(err)
        return console.log(err);
    
    console.log(data);
});

// Async Apppend File

fs.appendFile("test.txt", ", I am from Bidar", (err)=>{
    if(err)
        return console.log(err);
});


// fs.truncate("test.txt", 5, (err)=>{
//     if(err)
//         return console.log(err);
// });

// For Async Delete file operation

fs.unlink("test.txt", (err)=>{
    if(err)
        return console.log(err);
});








