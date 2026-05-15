function iniciarInicio(){

    const database =
    JSON.parse(localStorage.getItem("database"));

    const contenedor =
    document.getElementById("cards");

    const recomendados =
    database.habitaciones.slice(0,4);

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

            const imagen =
            h.imagenes[0];

            contenedor.innerHTML += `

            <div class="card">

                <img
                src="${imagen}"
                class="card-image"
                >

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

                    <p class="price">
                        $${h.precio}
                    </p>

                </div>

            </div>

            `;
        });

    }

}

iniciarInicio();