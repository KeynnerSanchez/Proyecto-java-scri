async function iniciarInicio(){

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

    const recomendados =
    database.habitaciones.slice(0,5);

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
            h.imagenes && h.imagenes.length > 0
            ? h.imagenes[0]
            : "https://picsum.photos/400/300";

            contenedor.innerHTML += `

            <div class="card">

                <img src="${imagen}">

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