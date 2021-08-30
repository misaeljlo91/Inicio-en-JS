var minCarril_1 = 60
var maxCarril_1 = 80
var maxCarril_2 = 100
var maxCarril_3 = 120

console.log("Volocidad mínima permitida en el carril Nro. 1:" + " " + minCarril_1 + "km/h")
console.log("Velocidad máxima permitida en el carril Nro. 1:" + " " + maxCarril_1 + "km/h")
console.log("Velocidad máxima permitida en el carril Nro. 2:" + " " + maxCarril_2 + "km/h")
console.log("Velocidad máxima permitida en el carril Nro. 3:" + " " + maxCarril_3 + "km/h")

var redCar = 70
var blueCar = 90
var greenCar = 190

console.log("Velocidad del auto rojo:" + " " + redCar + "km/h")

if(redCar < minCarril_1){
    console.log("El auto rojo no tiene permitido circular por ningún carril.")
}else if(redCar <= maxCarril_1){
    console.log("El auto rojo circula por el carril Nro. 1.")
}else if(redCar <= maxCarril_2){
    console.log("El auto rojo circula por el carril Nro. 2.")
}else if(redCar <= maxCarril_3){
    console.log("El auto rojo circula por el carril Nro. 3.")
}
if(redCar > maxCarril_3){
    console.log("El auto rojo superó el límite de velocidad permitido.")
}

console.log("Velocidad del auto azul:" + " " + blueCar + "km/h")

if(blueCar < minCarril_1){
    console.log("El auto azul no tiene permitido circular por ningún carril.")
}else if(blueCar <= maxCarril_1){
    console.log("El auto azul circula por el carril Nro. 1.")
}else if(blueCar <= maxCarril_2){
    console.log("El auto azul circula por el carril Nro. 2.")
}else if(blueCar <= maxCarril_3){
    console.log("El auto azul circula por el carril Nro. 3.")
}
if(blueCar > maxCarril_3){
    console.log("El auto azul superó el límite de velocidad permitido.")
}

console.log("Velocidad del auto verde:" + " " + greenCar + "km/h")

if(greenCar < minCarril_1){
    console.log("El auto verde no tiene permitido circular por ningún carril.")
}else if(greenCar <= maxCarril_1){
    console.log("El auto verde circula por el carril Nro. 1.")
}else if(greenCar <= maxCarril_2){
    console.log("El auto verde circula por el carril Nro. 2.")
}else if(greenCar <= maxCarril_3){
    console.log("El auto verde circula por el carril Nro. 3.")
}
if(greenCar > maxCarril_3){
    console.log("El auto verde superó el límite de velocidad permitido.")
}