// Immediately invoked function expressions

(function egg(){
    console.log(`db connected `)
})(); // to avooid global scope pollution we use iife
//; is used to end the last code otherwise it will give error in future codes 
//named iife


(  (name) => {
    console.log(`db conected two ${name}`)
})('shobhit')
//unnamed iffe