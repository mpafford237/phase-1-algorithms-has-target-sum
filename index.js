function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false
}

/* 
  The reduce function has an Big O of O(n^2), where n = the number of integers in the array
*/

/* 
 function uses a double for statement to add each element in the array to all other elements of the array subsequently
*/

/*
 the second for statement runs through each value of i before the iteration reaches i + 1
 This isn't the best method for larger data sets but technically could be faster for small ones less than 10. O(n) would be better!
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
