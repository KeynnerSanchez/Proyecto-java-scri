function iniciarInicio(){

    const database =
    JSON.parse(
        localStorage.getItem("database")
    );

    const contenedor =
    document.getElementById("cards");

    const recomendados =
    [...database.habitaciones]
    .sort(() => Math.random() - 0.5)
    .slice(0,8);

    renderCards(recomendados);

    function renderCards(lista){

        contenedor.innerHTML = "";

        lista.forEach(h => {

            contenedor.innerHTML += `

            <a
            href="
            reservas.html?id=${h.id}
            "
            class="card-link"
            >

                <div class="card">

                    <div class="carousel">

                        ${h.imagenes.map(img => `

                            <img
                            src="${img}"
                            >

                        `).join("")}

                    </div>

                    <div
                    class="favorite"
                    onclick="
                    event.preventDefault();
                    toggleFavorito(${h.id})
                    "
                    >

                        <i
                        class="
                        fa-solid fa-heart
                        "
                        ></i>

                    </div>

                    <div class="card-content">

                        <h3>
                            ${h.nombre}
                        </h3>

                        <p>
                            📍 ${h.ciudad}
                        </p>

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