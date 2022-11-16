var abc = xyz(10);
 
console.log(abc);
console.log(xyz);
 function xyz(x){
    return function(a){
    console.log(x*a);
    }
 }
 abc(5);


var x=20;
 console.log(x);

 function abc(){

    console.log(x);
     x=21;

 }

 abc();
