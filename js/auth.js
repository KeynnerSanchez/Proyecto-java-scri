async function iniciarAuth(){

    const database =
    await cargarDatabase();

    const registerForm =
    document.getElementById("registerForm");

    const loginForm =
    document.getElementById("loginForm");

    // REGISTRO
    if(registerForm){

        registerForm.addEventListener("submit", e => {

            e.preventDefault();

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
                favoritos: [],
                reserva: null
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

    // LOGIN
    if(loginForm){

        loginForm.addEventListener("submit", e => {

            e.preventDefault();

            const email =
            document.getElementById("email").value;

            const password =
            document.getElementById("password").value;

            const usuario =
            database.usuarios.find(u =>

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
}

iniciarAuth();