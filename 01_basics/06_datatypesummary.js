// primitive datatypes

// 7 typess : string, number , boolean , null , undefined , symbol, BigInt




const score = 100
 const scorevalue = 100.2

const isLoggedIn = false 
const outsideTemp = null

let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId)

const bigNumber = 3265367873746738462378n

// reference (non primitive)

// array , objects, functions 

const heros = ["shaktiman", "iroman","captain"]
let myobj = {
    name : "hiitesh" ,
    age : 20 


}

const funsction = function(){
    console.log("")
}
// for finding the type of datatype
console.log(typeof bigNumber)