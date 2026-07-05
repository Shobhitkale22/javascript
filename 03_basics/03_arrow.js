const user = {
    username : "shobhit",


    price : 7767,


    welcomemessage : function(){
        console.log(`${this.username} , welcome to github `) // this here is used for current context 
        console.log(this)//this here is showing the current context of the local scope so it will print the whole object two time one with shobhit and otheer with vedika
    }
}
//user.welcomemessage()
//user.username = "vedika"
//user.welcomemessage()

//console.log(this)  //  => this is gonna print {} empty because there is no context in global scope 

//function egg (){
   // let username = "shobhit"
    //console.log(this.username) // => this will print undefined beacuse it only works in object not in functions
//}

//egg()

//const egg = () => {
    //let username = "shobhit"
  //  console.log(this) // here also it will print undefined 
//}

//egg()

//const addtwo = (num1 , num2) => { // arrow function, this is also called as explicit function 
//return num1 + num2 
//}

const addtwo = (num1 , num2) =>   (num1 + num2)  //no need of return 
// if u write it in {} u have to write return in it 
// this is called as implicit return
console.log(addtwo(3,4))


const myArray = [2 , 4 ,5 ]

