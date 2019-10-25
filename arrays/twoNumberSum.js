function twoNumberSum(array, targetSum) {
    // Write your code here.

    for(let i = 0; i <= array.length; i++) {
        const firstEl = array[i]
        for(let j = i + 1; j <= array.length; j++) {
            const secondEl = array[j]
            if(firstEl + secondEl === targetSum) {
                // return comination sorted from lowest to highest
                return [array[j], array[i]].sort((a,b) => a - b)
            }
        }
    }
    // if combination doesn't exist return empty array
    return []
}

// Sample Input: [3,5,-4,8,11,1,-1,6],10
// Sample Output: [-1,11]

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6],10))