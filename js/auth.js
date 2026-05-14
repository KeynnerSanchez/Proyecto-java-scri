const registerForm =
document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", e => {

        e.preventDefault();

        const database =
        JSON.parse(localStorage.getItem("database"));

        const nombre =
        document.getElementById("nombre").value;

        const identificacion =
        document.getElementById("identificacion").value;

        const nacionalidad =
        document.getElementById("nacionalidad").value;

        const telefono =
        document.getElementById("telefono").value;

        const email =
        document.getElementById("email").value;

        const password =
        document.getElementById("password").value;

        const existe =
        database.usuarios.find(
            u => u.email === email
        );

        if(existe){

            alert("El usuario ya existe");
            return;
        }

        const nuevoUsuario = {

            nombre,
            identificacion,
            nacionalidad,
            telefono,
            email,
            password,

            reserva:null,

            favoritos:[]
        };

        database.usuarios.push(
            nuevoUsuario
        );

        localStorage.setItem(
            "database",
            JSON.stringify(database)
        );

        alert("Registro exitoso");

        window.location.href =
        "login.html";

    });

}

const loginForm =
document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", e => {

        e.preventDefault();

        const database =
        JSON.parse(localStorage.getItem("database"));

        const email =
        document.getElementById("email").value;

        const password =
        document.getElementById("password").value;

        const usuario =
        database.usuarios.find(

            u =>
            u.email.trim() === email.trim()
            &&
            u.password.trim() === password.trim()

        );

        if(!usuario){

            alert("Datos incorrectos");
            return;
        }

        localStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuario)
        );

        alert("Bienvenido");

        window.location.href =
        "index.html";

    });

}