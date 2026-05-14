async function iniciarReservas(){

    if(!localStorage.getItem("database")){

        const habitacionesResponse =
        await fetch(
            "./assets/data/habitaciones.json"
        );

        const usuariosResponse =
        await fetch(
            "./assets/data/usuarios.json"
        );

        const habitaciones =
        await habitacionesResponse.json();

        const usuarios =
        await usuariosResponse.json();

        const database = {

            usuarios,
            habitaciones
        };

        localStorage.setItem(
            "database",
            JSON.stringify(database)
        );
    }

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
            h.imagenes && h.imagenes.length > 0
            ? h.imagenes
            : [
                "https://picsum.photos/400/300"
              ];

            const servicios =
            h.servicios
            ? h.servicios.join(" • ")
            : "WiFi • TV";

            contenedor.innerHTML += `

            <div class="card">

                <div class="carousel">

                    ${imagenes.map(img => `

                        <img
                        src="${img}"
                        class="carousel-img"
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

                    <p>${h.ciudad}</p>

                    <p>
                        👥 ${h.personas || 2} personas
                    </p>

                    <p>
                        🛏️ ${h.camas || 1} camas
                    </p>

                    <p>
                        📅 ${h.fechas || "Disponible este mes"}
                    </p>

                    <p>
                        ${servicios}
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

    window.reservar = function(id){

        const usuario =
        JSON.parse(
            localStorage.getItem("usuarioActivo")
        );

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

            alert("Habitación reservada");
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

    window.cancelarReserva = function(id){

        const usuario =
        JSON.parse(
            localStorage.getItem("usuarioActivo")
        );

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

}

iniciarReservas();