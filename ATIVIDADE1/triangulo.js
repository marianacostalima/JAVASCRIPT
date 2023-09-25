//referências 

const frm = document.querySelector("form")
const respPossivel = document.querySelector("h4")
const respTipo = document.querySelector("h6")

const inLadoA = document.getElementById("inLadoA");
const inLadoB = document.getElementById("inLadoB");
const inLadoC = document.getElementById("inLadoC");

//ação de click ao button

frm.addEventListener("submit", (e) => {
    
    respTipo.innerText = ""
    respPossivel.innerText = ""

    let ladoA = Number(frm.inLadoA.value);
    let ladoB = Number(frm.inLadoB.value);
    let ladoC = Number(frm.inLadoC.value);

    //evita o envio do formulario
    e.preventDefault();
    
    //Comparação

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB ) {

        respPossivel.innerText = "Lados não podem formar um triângulo"

    } 
    else {

        respPossivel.innerText = "Lados podem formar um triângulo"

        //verificar o tipo do triângulo

        if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {

            respTipo.innerText = "Esse triângulo é Equilátero"
            respTipo.style.color = "red"

            inLadoA.value = ""; 
            inLadoA.focus();
            inLadoB.value = ""; 
            inLadoB.focus();
            inLadoC.value = ""; 
            inLadoC.focus();

        }

        else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB) {

            respTipo.innerText = "Esse triângulo é Isósceles"
            respTipo.style.color = "blue"

            inLadoA.value = ""; 
            inLadoA.focus();
            inLadoB.value = ""; 
            inLadoB.focus();
            inLadoC.value = ""; 
            inLadoC.focus();

        } 
        else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {

            respTipo.innerText = "Esse triângulo é Escaleno"
            respTipo.style.color = "green"

            inLadoA.value = ""; 
            inLadoA.focus();
            inLadoB.value = ""; 
            inLadoB.focus();
            inLadoC.value = ""; 
            inLadoC.focus();

        }

    }
})