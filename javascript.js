const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const seletor = document.querySelector(".operacoes");
let resultado = document.querySelector(".resultado");

seletor.style.padding="10px"
n1.style.width="90px"
n2.style.width="90px"
n1.style.height="39px"
n2.style.height="39px"

/*change é "escolha", já o "keyup" é para quando o usuário TIRAR o dedo do teclado, daí atualiza em tempo real.*/
seletor.addEventListener("change", calcular);
n1.addEventListener("keyup", calcular);
n2.addEventListener("keyup", calcular);

function calcular(){
    const v1 = Number(n1.value);
    const v2 = Number(n2.value);
    const operacoes = seletor.value;
    if(operacoes==="+")
        resultado.innerHTML = (v1 + v2).toFixed(2);
    if(operacoes==="-")
        resultado.innerHTML = (v1 - v2).toFixed(2);
    if(operacoes==="*")
        resultado.innerHTML = (v1 * v2).toFixed(2);
    if(operacoes==="/")
        resultado.innerHTML = (v1 / v2).toFixed(2);
}
