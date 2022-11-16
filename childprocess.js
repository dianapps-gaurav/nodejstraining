const { fork,spawn, exec, execFile} = require ('child_process');

console.log("forking a new child process");
 const child1 = fork('child.js');

 child1.on("close",(code) => {
console.log("child process has been closed",+ code);
 })

 // communication between the files

 child1.send(29);
 child1.on("message", (data)=>{
    console.log("message sucessfully received from child", data);
 })


const child2 = spawn('ls', ['-lh', 'child.js'])

child2.stdout.on('data', (data) => {
    console.log(`stdout:`,data);
  })
  ;
    
  child2.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

const child3 = exec("xdg-open 'http://www.linkedin.com'",(error, stdout, stderr) => {

if (error) {
   console.log(error.stack);
   console.log('Error code: '+error.code);
   console.log('Signal received: '+error.signal);
}
console.log('stdout: ' + stdout);
console.log('stderr: ' + stderr);
});

let abc = xyz(10);

console.log("abc-->", abc(5));

function xyz (x) {
    return function (y) {
        return x*y;
    };
}

const child4 = execFile("/home/dianapps/Desktop/Development/Myproject/Backend/nodejstraining/child.js",(error, stdout) =>{
    if (error) {
           console.log(error.stack);
           console.log('Error code: '+error.code);
           console.log('Signal received: '+error.signal);
         }
        console.log('stdout: ' + stdout);
        
        });




