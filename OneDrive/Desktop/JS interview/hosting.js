// Hosting in js 

// 1 variable Hosting

console.log(a) // undefined 
// because 
var a=10; 



function host(){
    a=100;
    var a=10;
}
console.log(a);

let hoist;

console.log(hoist); // Output: undefined
hoist = 'Hoisted';

