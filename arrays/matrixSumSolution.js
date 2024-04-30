 /* Problem: Calculate the sum of all elements in a matrix.

  Problem Understanding:
  Given a matrix (2D array) of integers, calculate the sum of all elements in the matrix.
  
  Examples and Edge Cases:
  
  Example 1:
  Input:
  

  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  Output: 45 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9)
  
  Edge Case:
  
  What if the matrix is empty?
  What if the matrix contains non-numeric values?

  
  Pseudocode:
  
  Initialize a variable sum to store the sum, initially set to 0.
  Iterate through each row of the matrix.
  Iterate through each element num in the current row.
  Add num to sum.
  After iterating through all elements, sum contains the total sum of all elements in the matrix.
  This problem allows us to practice working with 2D arrays and iterating over matrix elements. 
  */

  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]


  function sumMatrix(matrix) {
    let sum = 0;

    // Iterate through each row of the matrix
    for (let i = 0; i < matrix.length; i++) {
        // Iterate through each element in the current row
        for (let j = 0; j < matrix[i].length; j++) {
            // Add the current element to the sum
            sum += matrix[i][j];
        }
    }

    return sum;
}


console.log(sumMatrix(matrix)); // Output: 45
