const course = {
    courseName: "js",
    price: "999",
    courseInstructor: "john"
}
//to get courseInstructor we have 2 way 
// 1. course.courseInstructor
//2. or we can define courseinstructor 1st then print (de-structure)

// const {courseInstructor} = course

// console.log(courseInstructor)
// or
const {courseInstructor: Instructor} = course

console.log(Instructor)

