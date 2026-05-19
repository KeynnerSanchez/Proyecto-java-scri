async function iniciarReservas(){

    await cargarDatabase();

    const database =
    JSON.parse(localStorage.getItem("database"));

    const contenedor =
    document.getElementById("cards");

    const buscador =
    document.getElementById("buscador");

    renderCards(database.habitaciones);

    buscador.addEventListener("input", () => {

        const valor =
        buscador.value.toLowerCase();

        const filtrados =
        database.habitaciones.filter(h =>

            h.nombre.toLowerCase().includes(valor)
            ||

            h.ciudad.toLowerCase().includes(valor)

        );

        renderCards(filtrados);
    });

    function renderCards(lista){

        const usuario =
        JSON.parse(
            localStorage.getItem("usuarioActivo")
        );

        contenedor.innerHTML = "";

        lista.forEach(h => {

            const favorito =
            usuario?.favoritos?.includes(h.id);

            const imagenes =
            h.imagenes || [];

            contenedor.innerHTML += `

            <div class="card">

                <div class="carousel">

                    ${imagenes.map(img => `

                        <img
                        src="${img}"
                        class="carousel-img"
                        onerror="this.src='assets/img/banner.jpg'"
                        >

                    `).join("")}

                </div>

                <div
                class="favorite"
                onclick="toggleFavorito(${h.id})"
                >

                    <i
                    class="
                    fa-solid fa-heart
                    ${favorito ? 'active' : ''}
                    "
                    ></i>

                </div>

                <div class="card-content">

                    <h3>${h.nombre}</h3>

                    <p>📍 ${h.ciudad}</p>

                    <p class="price">
                        $${h.precio}
                    </p>

                </div>

            </div>

            `;
        });
    }

    // MOSTRAR USUARIO
    const usuario =
    JSON.parse(localStorage.getItem("usuarioActivo"));

    const navRight =
    document.querySelector(".nav-right");

    if(usuario && navRight){

        navRight.innerHTML = `

            <span class="usuario-nav">
                ${usuario.nombre}
            </span>

            <button onclick="cerrarSesion()">
                Salir
            </button>

        `;
    }

    window.cerrarSesion = function(){

        localStorage.removeItem(
            "usuarioActivo"
        );

        location.reload();
    }
}

iniciarReservas();