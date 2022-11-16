const EventEmiiter = require('events');
 const event = new EventEmiiter();

 event.on("first",() =>{
    console.log("first event called");
 })
 event.on("first",() =>{
    console.log("first event called again");
 })
  
 event.emit("first");