console.log("hello from child file");

process.on("message", (data) => {
    console.log("message received from fork file",+ data);
})

process.send("text from child side");