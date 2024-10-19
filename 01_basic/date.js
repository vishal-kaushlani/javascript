let myDate = new Date()

// date data type is object i.e date is an object in js

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23)  // y m d h m s
let myNewCreatedDate = new Date("2023-01-14")
 
// console.log(myNewCreatedDate)
// console.log(myCreatedDate)
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp) // for using room booking fast poles etc

console.log(myCreatedDate.getTime())


let newDate = new Date()

const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Get the month name
  let monthName = months[newDate.getMonth()];

  console.log(monthName);

// console.log(newDate.getMonth());
console.log(newDate.getDay());

let weekdayInKolkata = newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'Asia/Kolkata'
  });
  
  console.log(weekdayInKolkata);

// console.log(newDate.toLocaleString())