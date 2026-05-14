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
    JSON.parse(localStorage.getItem("usuarioActivo"));

    contenedor.innerHTML = "";

    lista.forEach(h => {

        const favorito =
        usuario?.favoritos?.includes(h.id);

        contenedor.innerHTML += `

        <div class="card">

            <img src="${h.imagen}">

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

                <p>${h.ciudad}</p>

                <p>
                    ${h.personas} personas
                </p>

                <p class="price">
                    $${h.precio}
                </p>

                <p>
                    ${
                        h.reservada
                        ? "Reservada"
                        : "Disponible"
                    }
                </p>

                ${
                    !h.reservada
                    ? `
                    <button
                        class="reservar"
                        onclick="reservar(${h.id})"
                    >
                        Reservar
                    </button>
                    `
                    : ""
                }

                ${
                    usuario?.reserva === h.nombre
                    ? `
                    <button
                        class="cancelar"
                        onclick="cancelarReserva(${h.id})"
                    >
                        Cancelar Reserva
                    </button>
                    `
                    : ""
                }

            </div>

        </div>

        `;
    });

}

function reservar(id){

    const usuario =
    JSON.parse(localStorage.getItem("usuarioActivo"));

    if(!usuario){

        alert("Debes iniciar sesión");
        return;
    }

    const usuarioDB =
    database.usuarios.find(
        u => u.email === usuario.email
    );

    if(usuarioDB.reserva){

        alert(
            "Solo puedes tener una reserva"
        );

        return;
    }

    const habitacion =
    database.habitaciones.find(
        h => h.id === id
    );

    if(habitacion.reservada){

        alert("Ya reservada");
        return;
    }

    habitacion.reservada = true;

    usuarioDB.reserva =
    habitacion.nombre;

    localStorage.setItem(
        "database",
        JSON.stringify(database)
    );

    localStorage.setItem(
        "usuarioActivo",
        JSON.stringify(usuarioDB)
    );

    location.reload();
}

function cancelarReserva(id){

    const usuario =
    JSON.parse(localStorage.getItem("usuarioActivo"));

    const usuarioDB =
    database.usuarios.find(
        u => u.email === usuario.email
    );

    const habitacion =
    database.habitaciones.find(
        h => h.id === id
    );

    habitacion.reservada = false;

    usuarioDB.reserva = null;

    localStorage.setItem(
        "database",
        JSON.stringify(database)
    );

    localStorage.setItem(
        "usuarioActivo",
        JSON.stringify(usuarioDB)
    );

    location.reload();
}