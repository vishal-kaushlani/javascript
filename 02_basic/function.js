function sayMyName(){
    console.log('A')
    console.log('B')
    console.log('C')
    console.log('D')
    console.log('E')
    console.log('F')
    console.log('G')
}

// sayMyName()  // we use parenthesis for execute the function


function addTwoNumbers(number1, number2){  // number1 and number2 is parameters
    console.log(number1 + number2)
}

// addTwoNumbers()
// addTwoNumbers(3,4) // 3 and 4 is arguments
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3, null)

// const result = addTwoNumbers(2,7)

// console.log("Result :" ,result); // in this result is showing undefined

// so this we have to define function in following way => 

function addTwoNumbersNew(number1, number2){
    let result = number1 + number2
    return result

    //or we can 

    return number1 + number2
}

const resultNew = addTwoNumbersNew(3,4)

// console.log(resultNew)


function loginUserMessage(username){
    // if(username === undefined){
    if(!username){
        return "please enter a username"
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage('mark'))

// function loginUserMessage(username = "sam"){ // for default value

function calculateCartPrice(...num1){  // to chane multiple values in array 
    return num1
}


// console.log(calculateCartPrice(200,400,500)) // for this we used spread operator

const product = {
    product: "Bucket",
    price: 299
}

function handleObject(anyobject){
    console.log(`product is ${anyobject.product} and price is ${anyobject.price}`)
}

handleObject(product)

handleObject({
    product: "Towel",
    price:399
})

const myNewArray = [200, 400, 100, 160]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([10,34,28,6]))

