/* 
push and Pop:
1.Create an empty array called numbers.
2. Push the numbers 1, 2, and 3 into the array.
3. Pop a number from the array.
4. Push the number 4 into the array.
5. Print the resulting array.

Before we write out the code let guess what will be out result
1. 



*/


let array = [];
array.push(1,2,3)
array.pop()
array.push()
console.log(array) //[ 1, 2 ]


/*
1.Create an empty array called colors.
2.Push the colors "red", "green", and "blue" into the array.
3.Shift a color from the array.
4.Unshift the color "yellow" into the array.
5.Pop a color from the array.
6.Push the color "purple" into the array.
7.Print the resulting array.

Before we write out the code let guess what will be out result
1. 

*/

let colors =  [];
colors.push("red","green","blue")
colors.shift()
colors.unshift("yellow")
colors.pop()
colors.push("yellow")
console.log(colors) //[ 'yellow', 'green', 'yellow' ]


// Sample Problem using concat()
let array1 = [1, 2, 3];
let array2 = [4, 5];
let newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5]


// Sample Problem using slice()
let colors2 = ["red", "green", "blue", "yellow", "purple"];
let slicedColors = colors2.slice(1, 4);
console.log(slicedColors); // Output: ["green", "blue", "yellow"]

// Sample Problem using splice()
let colors1 = ["red", "green", "blue"];
colors.splice(1, 1, "yellow", "purple");
console.log(colors1); // Output: ["red", "yellow", "purple", "blue"]

/*
Problem: Emily is a teacher. She has a list of student IDs. She wants to print each student's ID along with their position in the list. Help Emily by writing a program that prints each student's ID and their position in the list.

*/
// Emily's list of student IDs
let studentIDs = ["S001", "S002", "S003", "S004"];

// Emily prints each student's ID along with their position in the list
studentIDs.forEach(function(studentID, index) {
    console.log("Student ID:", studentID, "Position:", index);
});
// Output:
// Student ID: S001 Position: 0
// Student ID: S002 Position: 1
// Student ID: S003 Position: 2
// Student ID: S004 Position: 3

/*

Problem: Sarah is a gardener. She has a list of plant heights in centimeters. She wants to calculate the square of each plant's height to monitor their growth. Write a program that calculates the square of each plant's height and stores the results in a new array.
*/

// Sarah's list of plant heights in centimeters
let plantHeights = [20, 30, 40, 50];

// Sarah calculates the square of each plant's height
let squaredPlantHeights = plantHeights.map(function(height) {
    return height * height;
});
console.log(squaredPlantHeights);
// Output: [400, 900, 1600, 2500]



/*
Problem: Tom is organizing a sports event. He has a list of participant numbers. He wants to filter out only the even participant numbers for a specific category. Help Tom by writing a program that filters out only the even participant numbers from the list.

*/

// Tom's list of participant numbers
let participantNumbers = [101, 102, 103, 104, 105];

// Tom filters out only the even participant numbers
let evenParticipantNumbers = participantNumbers.filter(number => {
    return number % 2 === 0;
});
console.log(evenParticipantNumbers);
// Output: [102, 104]
