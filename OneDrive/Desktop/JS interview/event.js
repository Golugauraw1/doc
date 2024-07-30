console.log("1");

setTimeout(()=>{
console.log("2")
})

const promise= new Promise((res,rej)=>{
    res()
}).then(()=>{
    console.log("3")
})

console.log("4");