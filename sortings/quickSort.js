function quickSort(array) {
    // Write your code here.
      if (array.length <= 1) return array;
      
      let pivot = array[0];
      let left = array.slice(1).filter((el) => el < pivot);
      let right = array.slice(1).filter((el) => el >= pivot);
      
      return quickSort(left).concat(pivot).concat(quickSort(right));
  }

// Sample Input: [8,5,2,9,5,6,3]
// Sample Output: [2,3,5,5,6,8,9]

console.log(quickSort([8,5,2,9,5,6,3]))