document.getElementById('Bienvenido').style.display = 'block';
document.getElementById('Hello').style.display = 'none';
document.getElementById('Marvel_P1').style.display = 'none';
document.getElementById('Marvel_P2').style.display = 'none';
document.getElementById('Marvel_P3').style.display = 'none';
document.getElementById('Vent_resultado').style.display = 'none';
document.getElementById('Anime_P1').style.display = 'none';
document.getElementById('Anime_P2').style.display = 'none';
document.getElementById('Anime_P3').style.display = 'none';
document.getElementById('graciasFin').style.display = 'none';

//ventana 1 al 2
const dato = document.getElementById('name');

function jugar() {
    if (dato.value === "") {
        alert('Escribe tu nombre para empezar el juego')
    } else {
        document.getElementById('hi').innerHTML = "HOLA," + " " + dato.value.toUpperCase();
        document.getElementById('Bienvenido').style.display = 'none';
        document.getElementById('Hello').style.display = 'block';
    }
}

//Preguntas de MARVEL
let mress1 = 0
let mress2 = 0
let mress3 = 0
    //pregunta 1 marvel
function quizM() {
    document.getElementById('Marvel_P1').style.display = 'block';
    document.getElementById('Hello').style.display = 'none';
}

//pregunta 2 marvel
function marvelSiga2() {
    document.getElementById('Marvel_P2').style.display = 'block';
    document.getElementById('Marvel_P1').style.display = 'none';

    if (document.getElementById('Mrp1.0').checked === true) {
        mress1 = 1;
        console.log('respuesta p1, ' + mress1);
    } else {
        mress1 = 0;
    }
}

//pregunta 3 marvel
function marvelSiga3() {
    document.getElementById('Marvel_P3').style.display = 'block';
    document.getElementById('Marvel_P2').style.display = 'none';
    if (document.getElementById('Mrp2.0').checked === true) {
        mress2 = 1;
        console.log('respuesta p2, ' + mress2);
    } else {
        ress2 = 0;
    }
}

// boton RESULTADO
function resultM() {
    if (document.getElementById('Mrp3.0').checked === true) {
        mress3 = 1;
        console.log('respuesta p3,' + mress3);
    } else {
        mress3 = 0;
    }

    let mcorrectas = mress2 + mress3 + mress1;
    console.log('correctas,' + mcorrectas);
    let mincorrectas = 3 - mcorrectas;
    console.log('incorrectas,' + mincorrectas);
    document.getElementById('Vent_resultado').style.display = 'block';
    document.getElementById('Marvel_P3').style.display = 'none';
    document.getElementById('nomRes').innerHTML = "¡ " + dato.value.toUpperCase() + " TU RESULTADO ES! ";
    document.getElementById('Correctas').innerHTML = " Tus respuestas correctas son: " + mcorrectas;
    document.getElementById('Incorrectas').innerHTML = "Tus respuestas incorrectas son: " + mincorrectas;

}

//BOTONES DE VOLVER A jugar
//SI
function Volver() {
    document.getElementById('Vent_resultado').style.display = 'none';
    document.getElementById('Hello').style.display = 'block';
}
//NO
function Fin() {
    document.getElementById('Vent_resultado').style.display = 'none';
    document.getElementById('graciasFin').style.display = 'block';
}

function Inicio() {
    document.getElementById('graciasFin').style.display = 'none';
    document.getElementById('Bienvenido').style.display = 'block';
}

//Preguntas de ANIME
let aress1 = 0;
let aress2 = 0;
let aress3 = 0;
//pregunta 1 anime
function quizA() {
    document.getElementById('Anime_P1').style.display = 'block';
    document.getElementById('Hello').style.display = 'none';
}

//pregunta 2 anime
function animeSiga2() {
    document.getElementById('Anime_P2').style.display = 'block';
    document.getElementById('Anime_P1').style.display = 'none';
    if (document.getElementById('Arp1.0').checked === true) {
        aress1 = 1;
        console.log('respuesta p1, ' + aress1);
    } else {
        aress1 = 0;
    }
}

//pregunta 3 anime
function animeSiga3() {
    document.getElementById('Anime_P3').style.display = 'block';
    document.getElementById('Anime_P2').style.display = 'none';
    if (document.getElementById('Arp2.0').checked === true) {
        aress2 = 1;
        console.log('respuesta p2, ' + aress2);
    } else {
        aress2 = 0;
    }
}

//boton FINALIZAR
function ResultA() {
    if (document.getElementById('Arp3.0').checked === true) {
        aress3 = 1;
        console.log('respuesta p3,' + aress3);
    } else {
        aress3 = 0;
    }

    let acorrectas = aress2 + aress3 + aress1;
    console.log('correctas,' + acorrectas);
    let aincorrectas = 3 - acorrectas;
    console.log('incorrectas,' + aincorrectas);
    document.getElementById('Vent_resultado').style.display = 'block';
    document.getElementById('Anime_P3').style.display = 'none';
    document.getElementById('nomRes').innerHTML = "¡ " + dato.value.toUpperCase() + " TU RESULTADO ES! ";
    document.getElementById('Correctas').innerHTML = " Tus respuestas correctas son: " + acorrectas;
    document.getElementById('Incorrectas').innerHTML = "Tus respuestas incorrectas son: " + aincorrectas;
}