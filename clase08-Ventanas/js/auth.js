
//DOM

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    console.log(email);
    console.log(password);

    if (email == "pepe@gmail.com" && password == "123456") {
        alert("Bienvenido " + email + " a la Administración de la Página")
        location.href = './pages/admin.html'
    }else{
        alert("Ususrio o password incorrectos");
        location.href = './pages/error.html'
    }
    
}





