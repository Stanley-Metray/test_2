const fs = require('fs');

fs.readFile('note.txt', (err, data)=>{
    if(err)
        console.log(err);

    console.log(data.length);
})


