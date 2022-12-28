// Bienvenidos
alert('¡Bienvenido 😀! Gracias por utilizar nuestra calculadora de IMC');
const primerNombre = prompt('Ingresa tu nombre:');
const edad = prompt('Ingresa tu edad:');
const email = prompt('Ingresa tu correo electrónico:');
alert(`Tú ingresaste que tu nombre es ${primerNombre}, tu edad es ${edad} años, y tu correo electrónico es ${email}`);

// Declaro las variables que necesito para el cáculo de IMC

let peso;
let altura;
let imc;

// Defino una función para calcular el IMC a partir del peso y la altura de una persona.

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Utilizo un ciclo while para pedir al usuario que ingrese su peso y su altura hasta que ingrese valores válidos

while (true) {
    peso = parseFloat(prompt('Ingresa tu peso en kilogramos:'));
    altura = parseFloat(prompt('Ingresa tu altura en metros:'));
    if (!isNaN(peso) && !isNaN(altura)) {
        // Los valores ingresados son válidos, así que salimos del ciclo
        break;
    }
    alert('Por favor, ingresa valores válidos para el peso y la altura');
}

// Lamo a la función para calcular el IMC a partir del peso y la altura ingresados por el usuario

imc = calcularIMC(peso, altura);
// alert(calcularIMC);

/* Utilizo un condicional 'if-else' para determinar en qué categoría se encuentra el IMC del usuario, según la siguiente tabla:

Bajo peso   ----> menor a 18.5
Peso normal ----> entre 18.5 y 24.9
Sobrepeso   ----> entre 25 y 29.9
Obesidad    ----> mayor a 30

*/

if (imc < 18.5) {
    alert(`Tu IMC es de ${imc}. Tienes bajo peso.`);
} else if (imc >= 18.5 && imc <= 24.9) {
    alert(`Tu IMC es de ${imc}. Tienes peso normal.`);
} else if (imc >= 25 && imc <= 29.9) {
    alert(`Tu IMC es de ${imc}. Tienes sobrepeso.`);
} else {
    alert(`Tu IMC es de ${imc}. Tienes obesidad.`);
}

