function validateUsername(){
    var regex = /^[a-zA-Z0-9_]{3,}$/;
    var username = document.getElementById("username").value;
    if (regex.test(username)) {
        document.getElementById("usernameError").innerHTML = "valid"
    }
    else{
        document.getElementById("usernameError").innerHTML = "not valid"
    }
}

function validatePassword(){
    var password = document.getElementById("password").value;
    if (password.length >= 8) {
        document.getElementById("passwordError").innerHTML = "valid"
    }
    else{
        document.getElementById("passwordError").innerHTML = "not valid"
    }
}

function validateEmail(){
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        document.getElementById("emailError").innerHTML = "valid"
    }
    else{
        document.getElementById("emailError").innerHTML = "not valid"
    }
}