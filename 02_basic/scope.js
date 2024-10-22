// let a = 10
// const b = 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

{} // curly braces is scope in object braces is object declaration else it is scope

if(true){
    let a = 10
    const b = 20
    var c = 30
    d = 40 // both c and d are global scope thats why we use const and let instead of var and direct declaration

}

// console.log(d)


//in nested function child function can excess their parent variables

// function one(){
//     const username = "vishal"
//     function two(){
//         const website = "google"
//         console.log(username)
//     }
//     // console.log(webiste)

//     two()
// }

// one()

// if(true){
//     const username = "vishal"

//     if(username == "vishal"){
//         const language = "JS"
//         console.log(username+ ' ' +language)

//     }
//     // console.log(language)
// }

// there are two ways to define function in js

addone(5)
function addone(num){
    return num + 1

}




// console.log(addone(3))
console.log(addTwo(3))
const addTwo = function(value){
    return value+2
}

//in const fucntion we are not able to use function above declaration but in normal we can

