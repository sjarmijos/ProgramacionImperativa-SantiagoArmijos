//ARRAY - arreglo - coleccion

let numerosDeLaSuerte = [15,27,153,151]

let palabras = ["casa", "avion", "perro", "gato"]

console.log(numerosDeLaSuerte[1])

let nombre = "pepe"

nombre = nombre.toLocaleUpperCase()
console.log(nombre)
let x = nombre.includes("E")
console.log(x)

console.log(nombre.length)
console.log(numerosDeLaSuerte.length)

console.log(numerosDeLaSuerte.includes(27))

let numeros = [1,4,5,7,12]
numeros.push(15)
console.log(numeros)

numeros.pop()

console.log(numeros)

let palabras2 = ["casa", "avion", "perro", "gato"]

// console.log(palabras2[0])
// console.log(palabras2[1])
// console.log(palabras2[2])
// console.log(palabras2[3])

const mostrarElementos = () => {

    for(let i = 0; i <= palabras2.length - 1; i++){
        console.log(palabras2[i])
    }
}

mostrarElementos();

let notasPepito = [8,9,10]
const promediar = (arreglo) => {
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++){
        suma += arreglo[i]
    }
    let promedio = suma / arreglo.length;
    return promedio
}

let promedioAlumno = promediar( notasPepito);
console.log(promedioAlumno)

let notasMaria = [10,9,10,9]
let promedioMaria= promediar( notasMaria);
console.log(promedioMaria)
