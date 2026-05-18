async function iniciarReservas(){

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

    const contenedor =
    document.getElementById("cards");

    const buscador =
    document.getElementById("buscador");

    renderCards(database.habitaciones);
    const params =
new URLSearchParams(window.location.search);

const habitacionId =
params.get("id");

if(habitacionId){

    setTimeout(() => {

        const card =
        document.getElementById(
            `habitacion-${habitacionId}`
        );

        if(card){

            card.scrollIntoView({

                behavior: "smooth",
                block: "center"

            });

            card.style.border =
            "3px solid #ff385c";

        }

    }, 300);
}

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
            : [];

            const servicios =
            h.servicios.join(" • ");

            contenedor.innerHTML += `

            <div
            class="card"
            id="habitacion-${h.id}"
            >

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

                    <p>📍 ${h.ciudad}</p>

                    <p>
                        👥 ${h.personas} personas
                    </p>

                    <p>
                        🛏️ ${h.camas} camas
                    </p>

                    <p>
                        📅 ${h.fechas}
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

                    <button
                    class="reservar"
                    onclick="reservar(${h.id})"
                    >
                        Reservar
                    </button>

                </div>

            </div>

            `;
        });

    }

}

iniciarReservas();