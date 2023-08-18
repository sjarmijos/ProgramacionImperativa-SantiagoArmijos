function f1() {
  console.log("hola");
}
f1();
function saludar(nombre, apellido = "Rodriguez") {
  let saludoFinal = `hola ${nombre} ${apellido} cómo estas?`;
  return saludoFinal;
}

let saludoListo = saludar("Maria", "Perez");
console.log(saludoListo);
let saludoListo2 = saludar("Gonzales", "Juansito");
console.log(saludoListo2);

function sumar(numeroUno, numeroDos) {
  return numeroUno + numeroDos;
}

let resultado = sumar(15, 12);
console.log(resultado);
let resultado2 = sumar(3, 1);
console.log(resultado2);

console.log("----------------- funciones expresadas -------------");

// FUNCIONES-EXPRESADAS O ANONIMAS

// FUNCIONES-EXPRESADAS TRADICIONAL
const restar = function (n1, n2) {
  return n1 - n2;
};

console.log(restar(2, 3));

// FUNCIONES-EXPRESADAS FLECHA -- ARROW FUNCTION

const multiplicar = (n1, n2) => n1 * n2;
const saludar2 = (nombre) => `Hola ${nombre} como estas?`;

//SCOPE ---> Local

const pruebaScope = () => {
    let palabra = "casa";
};

//funcion conversora

const conversor = (cantidadPesos, valorDolar) => cantidadPesos/valorDolar
let dolares = conversor(5000,200)
console.log(dolares)

//funcion promedio

const promediar = (nombre, n1, n2, n3) => {
    let promedio = (n1+n2+n3)/3
    return `El promedio de ${nombre} es: ${promedio}`
}

let resultadoPepito = promediar("Pepito", 8,9,10)
let resultadoJuansito = promediar("Juansito", 5,8,10)
console.log(resultadoPepito)
console.log(resultadoJuansito)