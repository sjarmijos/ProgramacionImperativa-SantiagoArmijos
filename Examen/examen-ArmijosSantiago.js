//Ejercicio 1
const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]
console.log("<--------------Ejercicio 1----------------->")
const filtroDeAutosPorModelo = (arr) =>{
    let autosFiltrados = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i].modelo>=2020){
            autosFiltrados.push(arr[i])
        }
    }
    return autosFiltrados
}

let ejer1 = filtroDeAutosPorModelo(autos);
console.log(ejer1)


//Ejercicio 2
console.log("<--------------Ejercicio 2----------------->")
let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]

const ordenDescendentePorPromedio = (arr) =>{
    let temp
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length-1; j++){
            if(arr[j].notaPromedio < arr[j+1].notaPromedio){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}
ordenDescendentePorPromedio(estudiantes)
console.log(estudiantes)

//Ejercicio 3 parte 1
console.log("<--------------Ejercicio 3 Parte 1----------------->")
let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

const columnaHaciaArreglo = (matriz, col) =>{
    let arregloCol = []
    for(let i = 0; i<matrix.length; i++){
        arregloCol.push(matriz[i][col])
    }
    return arregloCol;
}

let ejer3_1=columnaHaciaArreglo(matrix,3)
console.log(ejer3_1)

//Ejercicio 3 parte 2
console.log("<--------------Ejercicio 3 Parte 2----------------->")
const imparesACero = (matriz) =>{
    for(let i = 0; i<matriz.length; i++){
        for(let j = 0; j<matriz[i].length; j++){
            if((matriz[i][j] % 2) !== 0 ){
                matriz[i][j] = 0
            }
        }
    }
}
console.table(matrix)
imparesACero(matrix)
console.table(matrix)