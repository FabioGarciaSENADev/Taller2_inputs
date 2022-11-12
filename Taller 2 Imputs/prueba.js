function check(){
    var password = document.getElementById("password").value;
    var cnfpassword = document.getElementById("confirmedpassword");
    var message = document.getElementById("message");
    if (password.length != 0){
        if (password == cnfpassword){
            message.textContent = "Ok";
        }
        else{
            message.textContent = "Las contraseñas no coinciden"
        }
    }
    else{
        alert("Ingrese una contraseña")
    }
}