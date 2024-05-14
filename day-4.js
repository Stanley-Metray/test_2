const fs = require('fs');

// READ STREAM

const rstream = fs.createReadStream("note.txt");

let count=0;

rstream.on('data', (chunk)=>{
    console.log(chunk); // returns buffer, convert it to string using .toString, and perform operations that you want.
    console.log('\n\n');
});

rstream.on('end', ()=>{
    console.log("No more data to read");
});

rstream.on('error', (err)=>{
    if(err)
        console.log(err);
});

// WRITE STREAM

const wstream = fs.createWriteStream("note2.txt");

wstream.write("Hello from Hydarbad!", (err)=>{
    if(err)
        console.log(err);

    wstream.end(()=>{
        console.log("Closed...");
    });
});

wstream.on('finish', ()=>{
    console.log("Writing finished...");
});


wstream.on('error', (err)=>{
    if(err)
        console.log(err);
});