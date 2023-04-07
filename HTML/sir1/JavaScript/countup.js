function countup(n){
    document.write("by");
    var i=0;
    document.write(i);
    if(i<=n)
    {
        i++;
        document.write(i);
    }
   
}
function countup1(){
    var x=document.getElementById("name").value;
    countup(x);
}