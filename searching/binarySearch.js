function binarySearch(array, target) {
    // Write your code here.
      for(let i = 0; i < array.length; i++) {
          // if element exist return 1
          if(array[i] == target) {
              return i
          }
          // if element does not exist return -1
          if(array.indexOf(target) == -1) {
              return -1
          }
      }
  }

//   Sample Input: [0,1,21,33,45,45,61,71,72,73],33
//   Sample Output: 3

console.log(binarySearch([0,1,21,33,45,45,61,71,72,73],33))