console.log(`Hello child process executed, ${process.argv[2]}`);

process.on('message', (message)=>{
    console.log(message);
});

process.send("This message is from Child Process");
