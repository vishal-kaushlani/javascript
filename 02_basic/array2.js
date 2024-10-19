const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)

//for print batman

// console.log(marvel_heroes[3][2])
 //this is not a good method

//  const all_heores = marvel_heroes.concat(dc_heroes)
//  console.log(all_heores)

//spread operator Syntax: (...array) 
//  const all_new_heroes = [...marvel_heroes, ...dc_heroes]

//  console.log(all_new_heroes)


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7,[4,5]]]

// const real_another_array = another_array.flat(2) // 2 is depth here for [4,5] , we can give infinity depth also

// console.log(real_another_array)

console.log(Array.isArray("vishal"))
console.log(Array.from("vishal"))
// console.log(Array.from({name: "vishal"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
