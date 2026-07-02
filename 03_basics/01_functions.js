function saymyname(){
    console.log("s")
    console.log("h")
    console.log("o")
    console.log("b")
    console.log("h")
}

//saymyname()

function addtwonumbers( number1 , number2){
    //console.log(number1+number2)
    //let result = number1 + number2
    //return result
    return number1 + number2 
}

const result = addtwonumbers(3, 4)

console.log("Result :" , result)

function loginusermsg(username = "sam"){
    
    if(!username){
       console.log( "please enter the username") 
    }
     return `${username} just logged in`

}

//console.log(loginusermsg("shobhit"))



function calculatecartPrice(...num1){  // ... is rest operator which compacts the whole valuess into a array

    return num1

}
//console.log(calculatecartPrice(200 , 400 , 500 , 2000)



const user = {
    username: "shobhit",
    price: 277
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username}`)
}

//handleobject(user)
handleobject(user)

const mynewarray = [200,3939,22,1122]

function returnSecondValue(getarray){
    return getarray[1]
}

//console.log(returnSecondValue(mynewarray))
// or you can directly write returnsecondvalue([23728,54,5,6546,645])