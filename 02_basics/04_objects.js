//const instauser = new Object()  singleton 

const instauser = {}  //non singleton

instauser.id = "123abc"
instauser.name = "shoby"
instauser.isLoggedIn = false





//console.log(instauser)

const regularuser = {
        email : "dsabs@gmail.com" ,
        fullname :  {
            userfullname : {
           firstname : "shobhit",
           lastname : "kale"
            }
        }
}

//console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1:"a" , 2: "b"}
const obj2 = {3:"a" , 4: "c"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({},obj1 , obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3)


console.log(Object.keys(instauser))
console.log(Object.values(instauser)) 