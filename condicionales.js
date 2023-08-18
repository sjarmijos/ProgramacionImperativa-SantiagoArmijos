//ESTRUCTURAS-DE-CONTROL
//CONDICIONALES 

//Crear una funcion que me devuelva los permisos que tiene el usuario
//user --> tiene permiso a muy poco
//admin --> tiene permiso casi completo
//superAdmin --> tiene permiso a todo

const determinarPermiso = (rolUsuario) =>{
    let condicionFinal = ""

    if(rolUsuario === "superAdmin"){
        condicionFinal = "tiene permiso a todo"
    }else if(rolUsuario === "admin"){
        condicionFinal = "tiene permiso casi completo"
    }else if(rolUsuario === "user"){
        condicionFinal = "tiene permiso a muy poco"
    }else{
        condicionFinal = "el rol no existe por ende, no te doy acceso"
    }

    return condicionFinal
}

let permisos = determinarPermiso("user")
console.log(permisos)


//TERNARIO --> usado cuando se tiene condiciones de respuesta si o no 2 caminos
//Crear una funcion que devuelva un String diciendo
//si llevo paraguas o no
//si el clima esta lluvioso --> "Si, llevalo"
//si el clima no esta lluvioso --> "No, no hace falta"

const llevoParaguas = (clima) =>{
    // if(clima === "lluvioso"){
    //     return "Si, llevalo"
    // }else{
    //     return "No, no hace falta"
    // }

    //TERNARIO 
    //condicion ? verdadera : falsa
    
    let x = clima === "lluvioso" ? "Si, llevalo" : "No, no hace falta"
    return x
}

let resultado = llevoParaguas("lluvioso")
console.log(resultado)



//SWITCH  ---- CASE

//Sistema que determine el total de impuestos a pagar dependiendo de la 
//marca del modelo

//Como base son 100 y despues hay que sumarle dependiendo
//vw --> 10
//bmw -->  20
//audi --> 30
//volvo --> 40
//renault --> 50
//citroen --> 60
//si no es ninguna de ellas esta excento


const determinarImpuesto = (marcaAuto) =>{
    
    let impuesto = 100

    switch(marcaAuto){
        case "vw":
            impuesto += 10
            break;
        case "bmw":
            impuesto += 20
            break;
        case "audi":
            impuesto += 30
            break;
        case "volvo":
            impuesto += 40
            break;
        case "renault":
            impuesto += 50
            break;
        case "citroen":
            impuesto += 60
            break;
        default:
            impuesto = 0
            break;
    }
    return impuesto > 0 ? impuesto : "Su auto esta excento de impuesto, no debe pagar nada"
}

let totalPagar = determinarImpuesto("citroens")
console.log(totalPagar)

//Crear una funcion que de acceso a un recital unicamente a las 
//personas que tengan mas de
//18 años y que tambien tengan ticket

const determinarIngresar = (edad, siTieneTicket) => {
    // if (edad>18 && siTieneTicket === true){
    //     return "si puede pasar"
    // }else{
    //     return "no puede pasar"
    // }
    return edad > 18 && siTieneTicket === true ? "si puede pasar" : "no puede pasar"
}

let puedePasar = determinarIngresar(20, true)
console.log(puedePasar)