const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const respsoma = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{

    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    let resposta = " ";
    let soma = 0;

    for (let i = 1; i <= 10; i++){
        resposta += numero + "x" + i + "=" + (numero * i) + "\n";
        soma += (numero * i);
    }
    resp.innerText = resposta;
    respsoma.innerText = "A soma dos resultados é:" +soma;
})
