function renderNavbar(){

    const navRight =
    document.querySelector(".nav-right");

    if(!navRight) return;

    const usuario =
    JSON.parse(
        localStorage.getItem("usuarioActivo")
    );

    if(usuario){

        navRight.innerHTML = `

            <span class="usuario-nav">
                ${usuario.nombre}
            </span>

            <button onclick="cerrarSesion()">
                Salir
            </button>

        `;
    }

    else{

        navRight.innerHTML = `

            <a href="login.html">
                Login
            </a>

            <a href="register.html">
                Registro
            </a>

        `;
    }
}

function cerrarSesion(){

    localStorage.removeItem(
        "usuarioActivo"
    );

    location.reload();
}

renderNavbar();