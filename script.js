// Exercise A
function fibs(n) {
    if (n == 0) {return []} 
    if (n == 1) {return [0]} 
    if (n == 2) {return [0, 1]} 

    const fibs_array = [0, 1]
    let prev1 = fibs_array[1], prev2 = fibs_array[0]

    for (let i = 1; i < n-1 ; i++) {
        fibs_array.push(prev1 + prev2)

        const tmp = prev1;
        prev1 += prev2;
        prev2 = tmp;
    }
    return fibs_array
}


function fibsRec(n) {
    const fibN = (n) => {
        return n <= 1 ? n : fibN(n - 1) + fibN(n - 2);
    } 

    const fibArr = []
    for (let j = 0; j < n ; j++) {
        fibArr.push(fibN(j))
    }
    return fibArr
}

console.log("for-loop")
console.log(fibs(0))
console.log(fibs(1))
console.log(fibs(2))
console.log(fibs(3))
console.log(fibs(4))
console.log(fibs(5))
console.log(fibs(8))

console.log("recursive")
console.log(fibsRec(0))
console.log(fibsRec(1))
console.log(fibsRec(2))
console.log(fibsRec(3))
console.log(fibsRec(4))
console.log(fibsRec(5))
console.log(fibsRec(8))

// Exercise B
//function to sort the given array
function mergeSort(arr) {
    if (arr.length <= 1) {
       return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
 }
  
 //function to merge the left and right elements
 function merge(left, right) {
    const result = [];
     
    while (left.length && right.length) {
       if (left[0] < right[0]) {
          result.push(left.shift());
       } else {
          result.push(right.shift());
       }
    }
     
    return [...result, ...left, ...right];
 }

 console.log("mergeSort")
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))