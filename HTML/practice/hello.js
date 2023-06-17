function validateform(){

        var name=document.myform.username.value;
        var password=document.myform.password.value;

        if(name==null||name=="")
        {
            alert("username cant be empty");
            return false;
        }
        elseif(password.length<6)
        {
            alert("password is short");
            return false;
        }
}