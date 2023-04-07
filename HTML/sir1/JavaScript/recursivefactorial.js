
function factorial(i){
    
    if(i==0){
        return 1;
    }
    else{
        return i*factorial(i-1);
    }
}
document.write("beigns")
var i=5;
var result =0;
result = factorial(i);
document.write(`The factorial is ${result}`);

//console.log(factorial(5));