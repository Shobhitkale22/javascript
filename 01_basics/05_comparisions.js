//console.log(2>1)
//console.log(2>=1)
//console.log(2<1)
//console.log(2==1)
//console.log(2!=1)

//console.log("2">1)
//console.log("02">1)

console.log(null>0)
console.log(null==0)
console.log(null>=0)

//the reason is that an equality check == and comparision ><>=<= work differently.
//co mparision convert null to number , trating it as 0 thats why (3) null>=0 is true and (1)null >0 is false.

// same u can do with undefined 
//console.log(undefined==0)

// ===  strict check 

console.log("2"=== 2)