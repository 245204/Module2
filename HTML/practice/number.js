function valid(){
    let text=document.getElementById("number").value;
    if(text<0||text>10||isNaN(text)){
        alert("not valid");
    }else{
        alert("valid");
    }
}