//OBJETOS -LITERALES 

// compuestos por propiedades y metodos
// pares de clave : valor
const perro = {
    nombre: "Percy",
    edad: 2,
    raza: "Golden Retriever",
    saltar: function(){},
    ladrar: function(){
        return ("Wouf y me llamo "+ this.nombre)
    }
}
let x = perro.ladrar()
console.log(x)

// //Bracket NOTATION --> avanzado
// console.log(perro["raza"])
// const mostrarPropiedad = (prop) =>{
//     console.log(prop +":"+perro[prop])
// }
// mostrarPropiedad("edad")


//Dot notation
// console.log(perro.nombre)

//MANIPULACION 

//para las propiedades se puede realizar las siguientes acciones
//MODIFICAR 
perro.edad = 1.8
perro.nombre = "Mi Percy"
console.log(perro)


//AGREGAR 
perro.tamano = "Mediano"
perro.sexo = "Macho"

//BORRAR 
delete perro.sexo

console.log(perro)


//productos
//Arreglos de objetos
const productos = [
    {
        nombre:"celular",
        precio:2,
        stock:5
    },
    {
        nombre:"Tablet",
        precio:3,
        stock:4
    },
    {
        nombre:"Televisor",
        precio:2,
        stock:12
    }
]

const verProductos = () =>{
    for(let i = 0; i<productos.length; i++){
        productos[i].stock += 10;
    }
}
verProductos()
console.log(productos)

function prom(){
    let suma = 0;
    for(let i = 0; i < this.notas.length; i++){
        suma += this.notas[i]
    }
    return suma/this.notas.length;
}

let estudiantes =[
    {
        nombre: "Pepe",
        edad: 22,
        notas: [7,8,9],
        promediar: prom
    },
    {
        nombre: "Maria",
        edad: 23,
        notas: [9,10,10],
        promediar: prom
    }
]

const funcionParaQueLaProfesoraEjecuta = () =>{
    for(let i=0; i < estudiantes.length; i++){
        console.log(
            `El promedio de ${estudiantes[i].nombre} es: ${estudiantes[i].promediar()}`)
    }
}

const agregarEstudiante = (nombre, notas) =>{
    estudiantes.push({
        nombre: nombre,
        notas: notas,
        promediar: prom
    })
}

agregarEstudiante("Santiago",[10,10,10])
funcionParaQueLaProfesoraEjecuta()