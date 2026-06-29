//singleton

// object literals

const mysym = Symbol("key1")

const JsUser = {
    name : "shobhit",
    "full name" : "Shobhit prashant kale" ,
    [mysym]  :"mykey1" , // if you have to write key in object then u have to include square bracket around mySym
    age : 22,
    location: "jaipur",
    email : "shobhit12@gmail.com",
    isloggedin : false
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mysym]) //in order to access the symbol here also u have to use the square bracket


//changing object value 
JsUser.email = "prashnt12@gmail.com"
// in order to freeze any object
//Object.freeze(JsUser) 

JsUser.email = "sauravkale@32gmail.com"
console.log(JsUser)


//myArray = ["h" , "i"]
//myArray[0] only  way to access array 

//functions to add 

JsUser.greeting = function(){
    console.log("hello js user")
}

JsUser.greetingtwo = function(){
    console.log(`hello js user ${this.name}`) //to refer values from object u have to use back ticks in console which is called string interpolation
}

console.log(JsUser.greeting())
