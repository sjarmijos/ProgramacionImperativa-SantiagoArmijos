// let - const
let nombre = "Pepe";
const apellido = "Perez";

//let y const crean un espacio de memoria,
//pero las variables con let se pueden modificar
//las creadas con const no se pueden modificar

console.log(nombre);
console.log(apellido);

//let nombre_usuario = "dasdas";
//let nombreDelUsuario = "dasdas";

nombre = "Carmen";
console.log(nombre);

//Tipo de datos -----> Primitivos

//STRINGS o cadena de texto
let frase = "hola como estas?";

//NUMBER -----> numeros
let edad = 12;

//BOOLEAN -----> true o false
let esMayorDeEdad = false;
let isLogged = true;

//UNDEFINED
let email = undefined;

//NULL
let stock = null;

//NaN
let y = 1;
let z = "pepe";
let x = z * y;

console.log("email: ", email);
console.log("x: ", x);

console.log("------------------------------");
//<----------------------- Operadores ------------------------->
//MATEMATICOS

let n1 = 5;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
//operador modulo
console.log(n1 % n2);

//concatenar
let palabra1 = "hola";
let palabra2 = "como estas?";
let fraseCompleta = palabra1 + " " + palabra2;
console.log(fraseCompleta);

//Template Literals ---------> Backsticks ``

let fraseCompleta2 = `${palabra1} pepe ${palabra2}, yo muy bien! `;
console.log(fraseCompleta2);

//COMPARACION
let num1 = 6;
let num2 = "6";
// console.log(num1 == num2) // ----> Simple
// console.log(num1 != num2) // ----> Simple
console.log(num1 === num2); // ----> Estricta
console.log(num1 !== num2); // ----> Estricta

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// OPERADORES LOGICOS

console.log("---------------------------")
// AND --> &&
//AND evalua y se queda(devuelve) con el ultimo TRUE o el primer FALSE
// de igual manera si existen devuelve el ultimo Truthy o el primer Falsy
let estaLogeado = false
//FALSY --> 0 - undefined - null - ""
//TRUTHY --> 1 - [] - {} - "mama"
let esAdmin = false

let tienePermiso = estaLogeado && esAdmin
console.log(tienePermiso)


// OR --> ||
//Con el primer truthy o con el ultimo falsy

let tienePermiso2 = estaLogeado === true || esAdmin === true || "mama"
console.log(tienePermiso2)

//NOT --> !
let r = true
console.log(!r)