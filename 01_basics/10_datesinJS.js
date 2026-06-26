//dates

let myDate = new Date()
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

//let mycreatedDate = new Date(2026 , 2 , 22)
//let mycreatedDate = new Date(2023 , 0 , 22, 5 , 8)
let mycreatedDate = new Date(2026-2-22)
console.log(mycreatedDate.toLocaleDateString())

let mytimestamp = Date.now()

console.log(mytimestamp)
console.log(mycreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
console.log(newdate)
console.log(newdate.getDay()+1)
console.log(newdate.getMonth()+1)

newdate.toLocaleString('default',{
    weekday : "long",
    
})