// Variables

var firstName = "Misael J."
var lastName = "López"
var age = 30

var fullName = firstName + " " + lastName

console.log(fullName)
console.log("Age:" + " " + age + " " + "years old")

var ignasiAge = 32
var ageDifference = age - ignasiAge

console.log("Ignasi´s age:" + " " + ignasiAge + " " + "years old")
console.log("Age difference:" + " " + ageDifference)

// If...then...else

if(age <= ignasiAge){
    if(age < ignasiAge){
        console.log("Ignasi is older than you")
    }else if(age == ignasiAge){
        console.log("You have the same age as Ignasi")
    }
}
if(age > ignasiAge){
    console.log("You are older than Ignasi")
}

var comparativeAge = 21

if(age > comparativeAge){
    console.log("You are older than 21")
}else{
    console.log("You are not older than 21")
}