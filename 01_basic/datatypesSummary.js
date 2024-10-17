//Primitive
//7 : string, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id)
// console.log(id === anotherId)

const bigNumber = 218309182387231283913983912873n // add n at last of the number

// console.log(bigNumber)
// console.log(typeof bigNumber)
// console.log(typeof outsideTemp)


//Non primitive or reference data types
//memory m reference allocate kiya ja skta hai

// Array, Objects, Functions  

const heros = ["shaktiman","naagraj","doga"]

let obj = {
    name: "vishal",
    age: "20"
}

// function(){

// }

const myFunction = function(){
    console.log("Hello World")
} 

// datatype of all non primitive is object and for functions its function object



// +++++++++++++++++++++++++++++++++++++++++++++

//Memory

// 1. Stack (in primitive)

// 2.Heap Memory (in non primitive)

let myName = "vishal"

let anotherName = myName

anotherName = "kaushlani"

// console.log(myName)
// console.log(anotherName)

let userOne = {
    name:'John',
    age:20
}
let userTwo = userOne

userTwo.name = 'Vishal'  // it will change userOne name also non primitive data store in heap memory (user one and user two have same reference)

console.log(userOne)
console.log(userTwo)

