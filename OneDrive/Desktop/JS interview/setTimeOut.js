//Find the output of below code ?
console.log("Start");
 setTimeout(() => { 
console.log("Timeout"); 
}); 
Promise.resolve().then(() => console.log("Promise")); 
console.log("End");
//output is
/** 
 * Start
 * End
 * Promise
 * timeout
 * */ 

// 2. Find the output ?
// var x=10;
//  function foo(){ 
// var x = 5;
//  console.log(x)
//  } 
// foo(); 
// console.log(x)
//output
/**
 * first get in the function and the the x value in function scope in x 
   is declared with value its print the function scope value is present 5
* Now after function its print console x value which is globaly declard value whis is 10
 */
//3. Find the output ?
// function x(){ 
// for(var i=1;i<=5;i++){
//  setTimeout(()=>{
//  console.log(i) 
// },i*1000) 
// } }
// x();

//output 
/** its print 66 6 66 in the delay of 1 sec because var is in function scope */
//4. Find the output ?
function x(){
let a = 10;
 function d(){
 console.log(a); 
} 
a = 500;
 return d;
}
var z = x();
z();
//output
// print a = 500 because value of a is updated 

// 5. Find the output ?

getData1() 
getData();
function getData1(){
 console.log("getData11")
} 
var getData = () => { 
console.log("Hello") 
}
//output 
/** think you error */