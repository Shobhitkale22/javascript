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
   // return number1 + number2 
}

const result = addtwonumbers(3, 4)

//console.log("Result :" , result)

function loginusermsg(username = "sam"){
    
    if(!username){
       console.log( "please enter the username") 
    }
     return `${username} just logged in`

}

//console.log(loginusermsg("shobhit"))



function 