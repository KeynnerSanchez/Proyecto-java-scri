function renderNavbar(){

    const usuario =
    JSON.parse(localStorage.getItem("usuarioActivo"));

    const userContainer =
    document.getElementById("userContainer");

    if(usuario){

        userContainer.innerHTML = `

            <div class="user-box">

                <span>
                    ${usuario.nombre}
                </span>

                <button
                    class="logout"
                    onclick="logout()"
                >
                    Salir
                </button>

            </div>

        `;

    }else{

        userContainer.innerHTML = `

            <div class="nav-links">

                <a href="login.html">
                    Login
                </a>

                <a href="register.html">
                    Registro
                </a>

            </div>

        `;
    }
}

function logout(){

    localStorage.removeItem(
        "usuarioActivo"
    );

    location.reload();
}

renderNavbar();