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
colors1.splice(1, 1, "yellow", "purple");
console.log(colors1); // Output: ["red", "yellow", "purple", "blue"]


/*
Problem: Emily is a teacher. She has a list of student IDs. She wants to print each student's ID along with their position in the list. Help Emily by writing a program that prints each student's ID and their position in the list.

Problem: Sarah is a gardener. She has a list of plant heights in centimeters. She wants to calculate the square of each plant's height to monitor their growth. Write a program that calculates the square of each plant's height and stores the results in a new array.

Problem: Tom is organizing a sports event. He has a list of participant numbers. He wants to filter out only the even participant numbers for a specific category. Help Tom by writing a program that filters out only the even participant numbers from the list.

*/