function searchInSortedMatrix(matrix, target) {
  // Write your code here.
	for(let i = 0; i < matrix.length; i++) {
		let arr = matrix[i];
		for(let j = 0; j < arr.length; j++) {
			let el = arr[j];
			if(el == target) {
				return [i,j]
			}
		}
	}
	return [-1,-1]
}

// Sample Input: [
//     [1,4,7,12,15,1000],
//     [2,5,19,31,32,1001],
//     [3,8,24,33,35,1002],
//     [40,41,42,44,45,1003],
//     [99,100,103,106,128,1004]
// ],44

// Sample Output: [3,3]

console.log(searchInSortedMatrix([
    [1,4,7,12,15,1000],
    [2,5,19,31,32,1001],
    [3,8,24,33,35,1002],
    [40,41,42,44,45,1003],
    [99,100,103,106,128,1004]
],44))