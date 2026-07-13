//for of
//this loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It allows you to loop through the values of an iterable object without having to use an index or a counter variable.

[{},{},{}]//syntax fo the for of loop


const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greeting = 'Hello, world!';
for (const greet of greeting) {
  //console.log(`each char  is ${greet}`);
}

//map

const myMap = new Map();
myMap.set('name', 'John');
myMap.set('USA', 'Washington D.C.');
myMap.set('age', 30);
console.log(myMap);

for (const [key, value] of myMap) {  // if you want this separte values like this then include both in singlre square bracket 

    console.log(`${key}: ${value}`);
}

const myobject = {
    name: 'John',
    game: 'basketball',
    
};
//for (const [key, value] of Object.entries(myobject)) { // obkects are never iterbable here for iterating it we need to use the another method called Object.entries() which returns an array of key-value pairs from the object. Then we can use the for...of loop to iterate over the array and access each key-value pair.
  //  console.log(`${key}: ${value}`);
//}

for(const key in myobject){
    console.log(`${key} shortcut is for ${myobject[key]}`);

}

const programming =["python","java","javascript","c++"]

for (const key in programming) {
    console.log(programming[key]); // here key is the index of the array and programming[key] is the value of the array at that index.
}


const coding = ["python","java","javascript","c++"]

//coding.forEach(function (item){
  //  console.log(item);
//})
coding.forEach((item) => {
    console.log(item);
})