function a(){
    var n=10;
    function b(){
        console.log(n)
    }
    b()
}
//a()
// output 5 5 5 5  5 5 after one second
function c(){
for(var i=0;i<5;i++){
  setTimeout(function(){
    console.log(i)
  },i*1000)
}
}
//c();
// 1,2,3,4,5 without hideing var keyword closure
function d(){
    for(var i=0;i<5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i)
            },i*1000)
        }
        close(i);
            
    }
    
}
d();
