let juegos = Number(prompt("Cuantas veces desea jugar"));

for (let step = 0; step < juegos; step++) {
    document.write(`Jugada número ${step+1}`)
    let jugada_usuario = prompt("Ingrese su juada (piedra,papel o tijera)").toLowerCase()

    let jugada_computador = Math.floor(Math.random() * 3)
    if (jugada_computador == 0) {
        jugada_computador = "piedra"
    } else if (jugada_computador == 1) {
        jugada_computador = "tijera"
    } else {
        jugada_computador = "papel"
    };



    if (jugada_usuario == "tijera") {
        if (jugada_usuario == "tijera" && jugada_computador == "tijera") {
            alert("Haz empatado");
        } else if (jugada_usuario == "tijera" && jugada_computador == "piedra") {
            alert("Haz perdido");
        } else {
            alert("Haz Ganado");
        }
    }

    if (jugada_usuario == "piedra") {
        if (jugada_usuario == "piedra" && jugada_computador == "piedra") {
            alert("Haz empatado");
        } else if (jugada_usuario == "piedra" && jugada_computador == "papel") {
            alert("Haz perdido");
        } else {
            alert("Haz Ganado");
        }
    }

    if (jugada_usuario == "papel") {
        if (jugada_usuario == "papel" && jugada_computador == "papel") {
            alert("Haz empatado");
        } else if (jugada_usuario == "papel" && jugada_computador == "tijera") {
            alert("Haz perdido");
        } else {
            alert("Haz Ganado");
        }
    }

    if (jugada_usuario != "papel" && jugada_usuario != "tijera" && jugada_usuario != "piedra") {
        alert("La jugada no es valida")
    }

    document.write(`<p>tu jugada fue ${jugada_usuario} la jugada de la computadora fue ${jugada_computador}</p>`)
};