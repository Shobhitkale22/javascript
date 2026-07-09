const usremail = "shobhit23@gmail.com"

if (usremail){
    console.log("got user email")
} else{
    console.log("dont have usermail")
}

//falsy values 

//false , 0 , -0 , BigInt 0n, "", null, undefined, NaN

//truthy values

//"0",'false'," ",[],{},function(){}

//if (useremail.length===0){
//    console.log("array is empty")
//}

const emptyObj = {}

if (Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

// nullish coalescing operator (??): null undefined 

let val1 ;
val1 = 5?? 10
val1 = null?? 10
val1 = undefined??15

console.log(val1)


//terniary operator 

//condition ? true : false

const icedteaprice = 100

icedteaprice<=60? console.log("less than 60"): console.log("more than 60")