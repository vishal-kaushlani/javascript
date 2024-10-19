// 1. singleton => object se bnate h to singleton hota h
//ex: object.create


// 2. object literals

// ex: const user = {}

const mySymbol = Symbol('key1') 

const user = {
    name: "vishal",
    [mySymbol] : "value1",
    age: 20
}

// console.log(user)
// console.log(user.name)
// console.log(user['name'])
// console.log(user[mySymbol])

user.name = "rohul"

// console.log(user)

//if i want to freeze object value (not able to change then we use Object.freeze())

// Object.freeze(user)
// user.name = "sumit"
// console.log(user)


user.greeting = function(){
    return ("hello world")
}

user.greeting2  = function(){
    return (`hello ${this.name}`)
}

// console.log(user.greeting)
console.log(user.greeting())
console.log(user.greeting2())
