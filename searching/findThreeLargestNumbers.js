function findThreeLargestNumbers(array) {
    // Write your code here.
      const i = array.length;
      const sortedArray = array.sort(function(a, b){return a-b})
      return sortedArray.slice(i-3, i)
  }

// Sample Input: [141,1,17,-7,-17,-27,18,541,8,7,7]
// Sample Output: [18,141,541]

console.log(findThreeLargestNumbers([141,1,17,-7,-17,-27,18,541,8,7,7]))