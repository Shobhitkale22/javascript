// if 

//if (true){

//}
//if (false){
    
//}

const isuserloggedin = true

if (isuserloggedin){
console.log("executed")
}
 
// < , > , <=, >= , ==, != , ===, !==

if (tempreature === 40){
    //console.log("less than 50")
    
}else{
  //  console.log("tempreature is greater than 50")
}

//console.log("executed ")// this line will surely execute but above if else will check the condition and then it will execute 

const score = 200

if (score> 100){
    const power = "fly" // if u use var here it will print becasue var works in global scope
    //console.log(`user power : $(power)`)
}

 //console.log(`user power : $(power)`) // this will cause problrem beacuse of global scope problem


 const balance = 1000
 
 if (balance<500) {
     //console.log("less than 500") }
 }
     else if (balance<750){
        //console.log("less than 750")


     }
     else if(balance<900){
       // console.log("less than 750")
     }
     else {
     //  console.log("less than 1200")

     }

     const userloggedin = true 
     const debitCard = true 
     const loggedinfromgoogle = false
     const loggedinfromemail = true 


     if (userloggedin && debitCard){
      console.log("allow to buy course ")
     }

     if(loggedinfromemail||loggedinfromgoogle){  // u can check for multiple user also or activity 
      console.log("user logged in")
     }