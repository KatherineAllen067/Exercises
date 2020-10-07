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
numbers= [ 2, 3, 4, 7, 3, 9, 1, 6, 3, 8, 5]
// console.log(numbers)

//for each index loop through and check if it exists in the new Arr
//check if the number is repeated 
function findOdd(numbers){
    var count = 0;
    //loop through numbers
    for(var i=0; i< numbers.length; i++){
        //loop through numbers again
        for(var d=0; d< numbers.length; d++){
            //compare iterators if equal count
            if(numbers[i] == numbers[d]){
                count++
            }
        }
        //if the count is an odd value return the iterator with the odd value
        if(count  % 2 !=0){
            return[i]
        }
    }
}
console.log(findOdd(numbers));