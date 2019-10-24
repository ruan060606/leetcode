function insertionSort(array) {
    // Write your code here.
      for (let i = 0; i < array.length; i++) {
          let el = array[i];
          
          let j = i - 1;
          while (j >= 0 && el < array[j]) { //if curr el is smaller than the starting loop el
              array[j + 1] = array[j];
              // array[j] = el;
              j--;
          } 
          
          array[j+1] = el;
      }
      return array;
  }

// Sample Input: [8,5,2,9,5,6,3]
// Sample Output: [2,3,5,5,6,8,9]

console.log(insertionSort([8,5,2,9,5,6,3]))
