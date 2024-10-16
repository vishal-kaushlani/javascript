const accountId = 14456;
let accountEmail = "vishal@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"


//prefer not to use var because of issue in block scope and functional scope.
// accountId = 2

// console.log(accountId)

// const accountId = 14456;
console.table([accountId, accountEmail, accountCity, accountPassword])