//Big O

//What is the runtime? 
// int product(int a, int b){
//     int sum = 0;
//     for (int i = 0; i< b; i++){
//         sum += a;
//     }
//     return sum;
// }
//this is linear time because it touches all nodes
// comparing a and b 
//but only iterates through b
// runtime would = 0(b) 

// int power(int a, int b){
//     if (b < 0){
//         return 0; 
//     }else  if (b ==0){
//         return 1;
//     }else{
//         return a * power(a, b-1);
//     }
// }
//need to find runtime of a to the power of b
//this is recursion from b to b-1 to b-2 down to 1 
//only iterates for b calls 
// runtime would be 0(b)


//JS 
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
numbers= [ 2, 2, 3, 4, 4, 4, 4, 7, 7, 3, 9, 9, 9, 9, 9, 9, 1, 1, 6, 6, 3, 8, 8, 8, 8, 5, 5 ]
// console.log(numbers)
//check if the number is repeated only an odd number of times 
function findOdd(numbers){
    //set a count to number of times it appears
    var count = 0;
    //loop through numbers
    for(var i=0; i< numbers.length; i++){
        //loop through numbers again
        for(var d=0; d< numbers.length; d++){
            //compare iterators if equal count
            if(numbers[i] === numbers[d]){
                count++
            }
        }
        //if the count is an odd value return the iterator with the odd value
        if(count % 2 == 1){
            return[i]
        }
    }
}
console.log(findOdd(numbers));
//returns index of the value found odd amount of times

// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"



//eloquentjavascript chapter questions
// #4 create a range function that takes a start and end and returns and array
function range(start, end, increment){
    array=[]
    var current= start;
    increment = increment || 1;
    if(increment > 0){
      while(current <= end){
      array.push(current)
        current+=increment;
      }
    }else{
            while(current >=end){
          array.push(current)
            current+=increment;
          }
    }
    return array;  
  }