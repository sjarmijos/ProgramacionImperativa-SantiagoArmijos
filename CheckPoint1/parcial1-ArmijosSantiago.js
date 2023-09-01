/*Ejercicio 1*/

console.log("<------------------Ejercicio 1------------------>")
const restarPares = (n1,n2) =>{

    if((n1%2 === 0) && (n2%2 === 0)){
        return `${n1} - ${n2} = ${n1-n2}`
    }else{
        return 'Lo siento, uno o más parámetros no son pares'
    }
}

let ejer1 = restarPares(10,8)
console.log(ejer1)


/*Ejercicio 2*/

console.log("\n\n<------------------Ejercicio 2------------------>")
const controlarRecital = (edad, ticket) =>{
    if(ticket){
        return edad >= 18 ? true : 'Sólo puedes acceder con un adulto acompañante' 
    }else{
        return ticket
    }
}

let ejer2 = controlarRecital(15,true)
console.log(ejer2)


/*Ejercicio 3*/

console.log("\n\n<------------------Ejercicio 3------------------>")
let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },
]

const filtrarArray = (arr) =>{
    let arrFiltrado = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i].tipo === "tecnologia" && arr[i].precio >= 50000){
            arrFiltrado.push(arr[i])
        }
    }
    return arrFiltrado;
}

let ejer3 = filtrarArray(productos)
console.log(ejer3)