// function reverse(){
// var num=document.getElementById("reverse").value;
// document.write(num);
// num=num+"";
// var result=num.split("").reverse().join("");
// }
// console.log(result);
function validate(){
    var mname=document.getElementById("name").value;
    var mpass=document.getElementById("password").value;
    var memail=document.getElementById("email").value;
    var mgender=document.getElementById("chk").validate;
    if(mgender == false){
        alert("enter gender");
    }
    if(mname==""){
        alert("enter your name");
    }
    if(mpass<6){
       alert("enter more than 6 letters");
    }
    if(memail==""){
       alert("enter valid email");
    }
}