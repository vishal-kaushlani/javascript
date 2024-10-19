// arrays
// () parenthese
// {} braces
// [] bracket or square bracket
const myArr = [0, 1, 2, 3, 4, true, "vishal"]

const newArr = new Array(1,2,3,4)

// console.log(newArr[1])

// newArr.push(5)
// newArr.push(6,7)
// newArr.pop()

// newArr.unshift(0)
// newArr.shift() // unshift and shift just like push and pop for add and remove element in starting

// console.log(newArr.includes(9))
// console.log(newArr.indexOf(3))


const otherArr = myArr.join()
console.log(otherArr)
console.log(typeof otherArr)


//slice and splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C ", myArr)