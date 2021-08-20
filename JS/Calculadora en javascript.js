const numero1 = document.querySelector("#valor1");
const numero2 = document.getElementById("valor2");
const buttonSuma = document.querySelector("#btn-suma");
const buttonResta = document.getElementById("btn-restar");
const buttonMultiplicacion = document.querySelector("#btn-multiplicacion");
const buttonDivision = document.getElementById("btn-division");
const spanResultado = document.getElementById("resultado");

buttonSuma.addEventListener("click", sumar);
buttonResta.addEventListener("click", restar);
buttonMultiplicacion.addEventListener("click", multiplicar);
buttonDivision.addEventListener("click", dividir);

function sumar() {
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    let resultado = num1 + num2;
    spanResultado.textContent = resultado;
}

function restar() {
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    let resultado = num1 - num2;
    spanResultado.textContent = resultado;
}

function multiplicar() {
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    let resultado = num1 * num2;
    spanResultado.textContent = resultado;
}

function dividir() {
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    let resultado = num1 / num2;
    spanResultado.textContent = resultado;
}