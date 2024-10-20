// const user = new Object()  // singleton
const tinderUser = {}  // not singleton

tinderUser.id = "123a"
tinderUser.name = "tom"
tinderUser.isLoggedin = false


// console.log(tinderUSer)

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userFullName:{
            firstName:"sam",
            lastName: "joe"
        }
    }
}

// console.log(regularUser.fullname);

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1, obj2} 


// const obj3 = Object.assign(obj1, obj2) // it will change obj1 
// const obj3 = Object.assign({},obj1, obj2) // {} will create new object in memory
const obj3 = {...obj1, ...obj2}

console.log(obj3)


//array of object

const users = [
    {
        id: 1,
        email: 'sam'
    },
    {
        id: 2,
        email: 'john'
    },
    {
        id: 3,
        email: 'authar'
    },

]

console.log(users[0].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedin'))

