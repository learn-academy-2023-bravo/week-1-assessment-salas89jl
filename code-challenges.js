// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// // Pseudo code:

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Create a function named "boilingPoint"
    // With parameter "temp" that represents the temperature (Fahrenheit)
// Create a conditional statement to check if its above, at, or bellow 
// Boiling point = 212 degrees Fahrenheit
// if the temp is = to boiling point (212 F); return `${temp} is at boling point`
// if the temp is > to boiling point (212 F); return `${temp} is bellow boling point`
// if the temp is < to boiling point (212 F); return `${temp} is above boling point`
// if a input does not meet temp parameters, then return "Error: Unable to determine temperature"
    
// const temperature1 = 42
// // Expected output: "42 is below boiling point"

// const temperature2 = 350
// // Expected output: "350 is above boiling point"

// const temperature3 = 212
// // Expected output: "212 is at boiling point"


// function boilingPoint (temp) {
//     if (temp < 212) {
//         return `${temp} is bellow boling point`
//     } else if (temp === 212) {
//         return `${temp} is at boling point`
//     } else if (temp > 212) {
//         return `${temp} is above boling point`
//     } else { 
//         return "Error: Unable to determine temperature"
//     }
// }
// console.log(boilingPoint(42))  // --> 42 is bellow boling point
// console.log(boilingPoint(350)) // --> 350 is above boling point 
// console.log(boilingPoint(212)) // --> 212 is at boling point


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.
// Expected output: 9

// Pseudo code:
// Create a function called <combinedArrayLength> 
    // "combinedArrayLength" will have two parameters:Arrays (padres1984WorldSeriesRuns, padres1998WorldSeriesRuns)
// Combine array padres1984WorldSeriesRuns with a shorter variableName <arrayOne> to produce a cleaner code
// Combine array padres1998WorldSeriesRuns with a shorter variableName <arrayTwo> to produce a cleaner code
// Use concatenation method for the two arrays to store the length result in "combinedArrayLength" <combinedArray>
// Return the length of both arrays using .length property

// function combinedArrayLength (arrayOne,arrayTwo) {
//     const combinedArray = arrayOne.concat(arrayTwo)
//     return combinedArray.length
// }

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// let arrayOne = padres1984WorldSeriesRuns
// let arrayTwo = padres1984WorldSeriesRuns

// console.log(combinedArrayLength (arrayOne,arrayTwo)) // --> 10 

// Not the result that was expected. 

// function combinedArrayLength (padres1984WorldSeriesRuns,padres1998WorldSeriesRuns) {
//     const combinedArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
//     return combinedArray.length
// }
// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// console.log(combinedArrayLength (padres1984WorldSeriesRuns,padres1998WorldSeriesRuns)) // --> 9

// After I removed the added let declared arrayOne and arrayTwo variables out of the code which was added to try making the code a little clearer. The expected result was produced. I was unabled to determined the reason why it didnt work in the first attemp.



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.
// Expected output: "3202 ovarB"

// Pseudo code:
// Create a console.log to print out 
// add the .split method to split the string into an array 
// add the .reverse method to reverse the order of the array
// add the .join method to join the array back to a string


// const currentCohort = "Bravo 2023"

// console.log (currentCohort.split("").reverse("").join("")) // --> 3202 ovarB



// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

// Create a Function named getLastIndex to help produce another value, and that new value will represent the last time  the given values: (42/10), declared as variables givenValue1/2,  were last entered in the provided array myNumbers. 

// This is the array that is going to be used for this code; which contains a total number of 9 index. 
// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]

// // 42 and 10 are declared const with variable names givenValue1 and givenValue2. 
// const givenValue1 = 42
// const givenValue2 = 10


// This will be the function named getLastIndex that needs to go through the array and check if any element in the array matches the declared variables giveValue1/2, and then tell us in what index 42 and 10 was last entered. 

// Using a for loop to go through each element in the array, and because arrays in javascript are arranged from 0,1,2,3...etc., additionally the last index of the arrays is = to -1. establishing -1 = to last index converts [1, 2, 3, 4] to [0, 1, 2, 3]. Using the .length property will ensure the loop cycles through each element in the array with the conditions set to match the givenValue 1 or 2. Once a condition is met it will produce an idex labelled index. once the loops conditions are met then it will return an index.

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]

// const givenValue1 = 42
// const givenValue2 = 10

// function getLastIndex(array, value){
//     let lastIndex = -1
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === value) {
//             index = i
//         }
//     }
//     return `${givenValue2} was last found in index ${index} of array: [${myNumbers}]`
// }const lastIndex = getLastIndex(myNumbers,givenValue2)

// console.log(lastIndex)
// 42 was last found in index 7 of array: [13,34,42,5,5,10,27,42,10]
// 10 was last found in index 8 of array: [13,34,42,5,5,10,27,42,10]



// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// In order to sort through the array the .sort() built-in method will be used to as a function used to compare with optional parameters().push
// Using the compare fuction as (a,b) => b - a 
// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// console.log(sanDiegoSummerTemperatures.sort((a,b) => b - a)) // --> [82, 80, 79, 77, 76, 73, 72]
// console.log(sanDiegoWinterTemperatures.sort((a,b) => b - a)) // --> [68, 67, 66, 66, 62, 59, 59]
