async function iniciarInicio(){

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

    const recomendados =
    [...database.habitaciones]
    .sort(() => Math.random() - 0.5)
    .slice(0,8);

    renderCards(recomendados);

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

            contenedor.innerHTML += `

            <a
            href="reservas.html?id=${h.id}"
            class="card-link"
            >

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
                    onclick="event.preventDefault(); toggleFavorito(${h.id})"
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
                            ${h.servicios.join(" • ")}
                        </p>

                        <p class="price">
                            $${h.precio}
                        </p>

                    </div>

                </div>

            </a>

            `;
        });

    }

}

iniciarInicio();