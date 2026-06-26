//stack (primitive) , Heap (non primitive)

let myyoutubename = "shobhitkale" 
let anothername = myyoutubename
anothername = "chaiaurparle"
//console.log(anothername)
//console.log= (myyoutubename)


let userOne ={
    email: "hshdhsahd@gmail.com" ,
    upi : "user@ybl"



}

let userTwo = userOne

userTwo.email = "danny@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//in non primitive it will match the values directly in the memoary