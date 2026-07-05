let a = 10
const b = 20
var c = 30 // and this is global scope this values can be accessed inside any function

if(true){
    let a = 10 
    const b = 20
}  // the values under the function is block scope this values cannot be accessed outside the block 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) 

const addTwo = function(num){  // hoisting 
    return num + 2
} 