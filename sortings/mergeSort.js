function mergeSort(array) {
    // Write your code here.
      if (array.length <= 1) return array;
      
      let mid = Math.floor(array.length / 2);
      let left = array.slice(0, mid); 
      let right = array.slice(mid);
      // console.log(mid, left, right)
      return mergeHelper(mergeSort(left), mergeSort(right));
  }
  
  function mergeHelper(left, right) {
      let sorted = [];
      
      while (left.length && right.length) {
          if (left[0] < right[0]) {
              sorted.push(left.shift());
          } else {
              sorted.push(right.shift());
          }
      }
      
      if (left.length > 0) {
          return sorted.concat(left);
      } else {
          return sorted.concat(right);
      }
  }

// Sample Input: [8,5,2,9,5,6,3]
// Sample Output: [2,3,5,5,6,8,9]

console.log(mergeSort([8,5,2,9,5,6,3]))