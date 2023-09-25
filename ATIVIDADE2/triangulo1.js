//Criar referências aos elementos da pagina

const frm = document.querySelector("form")
const respTempo = document.querySelector("h4")
const respTroco = document.querySelector("h6")

const inValor = document.getElementById("inValor");

//adicionando uma ação de click ao button

frm.addEventListener("submit", (e) => {

    let tempo = 0
    let resto = 0
    let vezes = 0

    respTempo.innerText = ""
    respTroco.innerText = ""

    let Valor = Number(frm.inValor.value);

    //evita o envio do formulario
    e.preventDefault();

    if(Valor == 0){

        alert("Digite um valor corretamente")

        inValor.value = ""
        inValor.focus()

    }else{

        if(Valor >= 3){

            resto = Valor % 3 
            vezes = (Valor - resto) / 3
            tempo = tempo + (vezes * 120)
            Valor = resto
        }
        if(resto >= 1.75){
            
            resto = Valor % 1.75 
            vezes = (Valor - resto) / 1.75
            tempo = tempo + (vezes * 60)
            Valor = resto
        }
        if(resto >= 1){
            
            resto = Valor % 1 
            vezes = (Valor - resto) / 1
            tempo = tempo + (vezes * 30)
            Valor = resto
        }

        inValor.value = ""
        inValor.focus()

        respTempo.innerText = "Minutos Disponiveis: " + tempo
        respTroco.innerText = "Troco: R$ " + resto

    }


})