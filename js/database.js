async function cargarDatabase(){

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

    const databaseGuardada =
    JSON.parse(
        localStorage.getItem("database")
    );

    if(!databaseGuardada){

        const database = {

            usuarios,
            habitaciones
        };

        localStorage.setItem(
            "database",
            JSON.stringify(database)
        );

    }else{

        databaseGuardada.habitaciones =
        habitaciones;

        localStorage.setItem(
            "database",
            JSON.stringify(databaseGuardada)
        );
    }

}

cargarDatabase();