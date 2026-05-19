async function cargarDatabase(){

    let database =
    JSON.parse(localStorage.getItem("database"));

    if(!database){

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

        database = {

            usuarios,
            habitaciones
        };

        localStorage.setItem(
            "database",
            JSON.stringify(database)
        );
    }

    return database;
}