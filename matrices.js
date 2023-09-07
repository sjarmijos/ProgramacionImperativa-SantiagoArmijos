//MATRICES arrays bidimensionales

let matriz = [
    [2,4,6],
    [1,7,2],
    [9,2,4]
]

//FILAS <----- forma de recorrer / acceder
const recorrerFila = (mat, numFila) =>{
    for(let i = 0; i<mat[2].length; i++){
        mat[numFila][i] = "hola"
    }
}

recorrerFila(matriz, 0)
console.table(matriz)

//COLUMNAS <------ Forma de recorrer / acceder

let matrix = [
    [2,4,6],
    [1,7,2],
    [9,2,4]
]

const recorrerCol = (mat) =>{
    let acc = 0
    for(let i = 0; i<mat.length; i++){
        if(mat[i][1] !== undefined && typeof(mat[i][1]) === "number"){
            acc+=mat[i][1]
        }
    }
    return acc
}

let res2=recorrerCol(matrix)
console.table(res2)