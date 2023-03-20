// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))
console.log(colors)

// a) Your answer: 
//      The .push built in method is used to place the value "indigo" into the last of the array
//      --> [tangerine, magenta, lilac, daffodil, indigo]
// b) Verify and explain: 
//      I was wrong. The output of the cosole.log(colors.push("indigo")) was "5". The output is stating that "indigo" was entered in index #5
//      If I wanted to have it list all of the colors, including the new added colors I can now use console.log(colors).

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: The output will be : 10
// b) Verify and explain: I was correct. The .length built it method counted the number of values contain within my string

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: The output will be: o
// b) Verify and explain: console.log(greeting[4]) is using the [] propertry in order to change the string into an array and then returning the value that is stored in index 4.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: 1
// b) Verify and explain: --> RubyWhen using the [] property in a console.log with an array. the value assigned to the variable in this case index equals 1 and will return the value of index # 1 of the array.

// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:[SATURDAY, SUNDAY]
// b) Verify and explain: This will log a TypeError: weekendDays.toUpperCase is not a function.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: I was not even close to being sure what this code block would run, so I ran it without answering. 
// b) Verify and explain: But, typeof is a unary operator that returns a string that indicates the data type of the operand. Because dataTypes.length returns the number of elements in the dataType array, the return was --> "number".
