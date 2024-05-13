// const os = require('os');

// console.clear();

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.cpus().length);
// console.log(os.hostname());
// console.log(os.uptime());

// Events module

const events = require('events');

const EventEmitter = new events.EventEmitter();

EventEmitter.on("request", ()=>{
    console.log("Request Event Occured");
});

// EventEmitter.emit("request");

EventEmitter.on("data", (data)=>{
    console.log("Data Event Occured", data);
});

setTimeout(()=>{
    EventEmitter.emit('data', "Hello");
}, 3000);

EventEmitter.on("xyz", (data)=>{
    console.log("xyz Event Occured", data);
});

EventEmitter.emit('xyz', "Dummy");