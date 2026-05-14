async function cargarBaseDatos(){

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

    if(!localStorage.getItem("database")){

        const database = {

            usuarios,
            habitaciones
        };

        localStorage.setItem(
            "database",
            JSON.stringify(database)
        );
    }
}

cargarBaseDatos();