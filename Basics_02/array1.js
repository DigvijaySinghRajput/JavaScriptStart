//array
const myArr = [0,1,2,3]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)


// Array methods

myArr.push(6) // adds element at the end
myArr.push(7)
myArr.pop() // pops element at the end

myArr.unshift(9) // adds element at the start
myArr.shift() //remove element at the start
//console.log(myArr)


//console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // creates a string of elements of myArr

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); // [ 0, 1, 2, 3, 6 ]

const myn1 = myArr.slice(1, 3) //gets the part of array excluding last

console.log(myn1); // [1,2]
console.log("B ", myArr); //[ 0, 1, 2, 3, 6 ] no change in og after slice


const myn2 = myArr.splice(1, 3) // gets the part including last element
console.log("C ", myArr); // [ 0, 6 ] orignal arr got changed after splice
console.log(myn2);