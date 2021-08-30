//Ejercicios

// Ejercicio Nro. 1

console.log("1.- Crear una función que reciba un conjunto de personajes y el nombre de una casa, y que devuelva un conjunto nuevo con los nombres, casa y actor que interpreta a cada personaje que estudian en dicha casa. Si la casa ingresada como argumento no existe, la función debería devolver un mensaje informándolo")

let house = "?"

function hpCasting(array, house){
    if(house == "Gryffindor" || house == "Slytherin" || house == "Hufflepuff" || house == "Ravenclaw"){
        let dataStudent = array.filter(student => student.house == house)
        .map((array) => {
            let hpCast = {
                "Name:": array.name,
                "House:": array.house,
                "Actor:": array.actor
            }
            return hpCast
        })
        return dataStudent
    }
    return "This house don't exist. Please, try again."
}

let howartsCasting = hpCasting(students, house)
console.table(howartsCasting)

// Ejercicio Nro. 2

console.log("2.- Crear una función que reciba un conjunto de cervezas, un nombre de propiedad y un orden. Las propiedades permitidas como criterio serán: ibu, alcohol, o nombre. Ante cualquier otro ingreso, la función debe devolver un mensaje informando esta limitación. La función debe devolver un nuevo conjunto ordenado en base a la propiedad ingresada como segundo argumento, de manera ascendente o descendente dependiendo del tercer argumento")

let property = "?"
let order = "down"

function propertyBeers(array, property, order){
    if(property == "name" || property == "abv" || property == "ibu"){
        if(property == "name" && order == "down"){
            let dataNames = array.filter(beer => beer.name)
            .sort((a, b) => {
                if(a.name == b.name){
                    return 0;
                }
                if(a.name < b.name){
                    return -1;
                }
                return 1;
            })
            .map((array) => {
                let dataName = {
                    "Name:": array.name,
                    "ABV:": array.abv,
                    "IBU:": array.ibu
                }
                return dataName
            })
            return dataNames
        }

        if(property == "name" && order == "up"){
            let dataNames = array.filter(beer => beer.name)
            .sort((a, b) => {
                if(a.name == b.name){
                    return 0;
                }
                if(a.name > b.name){
                    return -1;
                }
                return 1;
            })
            .map((array) => {
                let dataName = {
                    "Name:": array.name,
                    "ABV:": array.abv,
                    "IBU:": array.ibu
                }
                return dataName
            })
            return dataNames
        }

        if(property == "abv" && order == "down"){
            let dataAbvs = array.filter(beer => beer.abv)
            .sort((a, b) =>{
                if(a.abv == b.abv){
                    return 0;
                }
                if(a.abv < b.abv){
                    return -1;
                }
                return 1;
            })
            .map((array) => {
                let dataAbv = {
                    "Name:": array.name,
                    "ABV:": array.abv,
                    "IBU:": array.ibu
                }
                return dataAbv
            })
            return dataAbvs
        }

        if(property == "abv" && order == "up"){
            let dataAbvs = array.filter(beer => beer.abv)
            .sort((a, b) =>{
                if(a.abv == b.abv){
                    return 0;
                }
                if(a.abv > b.abv){
                    return -1;
                }
                return 1;
            })
            .map((array) => {
                let dataAbv = {
                    "Name:": array.name,
                    "ABV:": array.abv,
                    "IBU:": array.ibu
                }
                return dataAbv
            })
            return dataAbvs
        }
        
        if(property == "ibu" && order == "down"){
            let dataIbus = array.filter(beer => beer.ibu)
            .sort((a, b) =>{
                if(a.ibu == b.ibu){
                    return 0;
                }
                if(a.ibu < b.ibu){
                    return -1;
                }
                return 1;
            })
            .map((array) => {
                let dataIbu = {
                    "Name:": array.name,
                    "ABV:": array.abv,
                    "IBU:": array.ibu
                }
                return dataIbu
            })
            return dataIbus 
        }

        if(property == "ibu" && order == "up"){
            let dataIbus = array.filter(beer => beer.ibu)
            .sort((a, b) =>{
                if(a.ibu == b.ibu){
                    return 0;
                }
                if(a.ibu > b.ibu){
                    return -1;
                }
                return 1;
            })
            .map((array) => {
                let dataIbu = {
                    "Name:": array.name,
                    "ABV:": array.abv,
                    "IBU:": array.ibu
                }
                return dataIbu
            })
            return dataIbus 
        }
    }
    return "This property cannot be found. Please, try another property."
}

console.table(propertyBeers(beers, property, order))

// Ejercicio Nro. 3

console.log("3.- Declarar una función que reciba como argumento las unidades disponibles en el juego, un tipo de recurso (madera, piedra, oro, alimento) y una cantidad (expresada en número entero). La función debe devolver un nuevo conjunto de unidades que no superen dicho límite de recursos para ser creada, ordenado por ese tipo de recurso de menor a mayor")

// Ejercicio Nro. 4

console.log(`4.- Armar un array que contenga 20 frutas. Cada fruta debe poseer un nombre, color y precio por kilo (no importa en qué moneda esté expresado). Crear una función que, dependiendo de los argumentos que le pase al momento de llamarla, devuelva:
- Las 5 frutas más caras, ordenadas por nombre, color o por precio, ascendente o descendentemente
- Las 5 frutas más baratas, ordenadas por nombre, color o por precio, ascendente o descendentemente`)

let feature = "?"
let orderFruit = "down"

function fruitsTable(array, feature, orderFruit){
    if(feature == "name" || feature == "color" || feature == "price"){
        if(orderFruit == "down"){
            let orderList = array.sort((a, b) => {
                if(a.price == b.price){
                    return 0;
                }
                if(a.price < b.price){
                    return -1;
                }
                return 1;
            })
            .splice(0, 5)
            .map(array => {
                let listFruits = {
                    "Name:": array.name,
                    "Color:": array.color,
                    "Price": `$ ${array.price}`
                }
                return listFruits
            })
            return orderList
        }

        if(orderFruit == "up"){
            let orderList = array.sort((a, b) => {
                if(a.price == b.price){
                    return 0;
                }
                if(a.price > b.price){
                    return -1;
                }
                return 1;
            })
            .splice(0, 5)
            .map(array => {
                let listFruits = {
                    "Name:": array.name,
                    "Color:": array.color,
                    "Price": `$ ${array.price}`
                }
                return listFruits
            })
            return orderList
        }
    }
    return "Feature did not found. Please, try again."
}

console.table(fruitsTable(fruits, feature, orderFruit))