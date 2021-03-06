//profile LookUP
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
function lookUpProfile(name, prop) {
  for (var x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// Self- Check
// We expect all of our developers to be exceptionally proficient at coding.
// As a self-check, you should be able to do the following questions in your 
//sleep using your favourite programming language.
// Reverse a simple words-only sentence ("bob likes dogs" -> "dogs likes bob")
// Write jQuery code to log the value of a select element every time it changes.

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
// numbers= [ 2, 2, 3, 4, 4, 4, 4, 7, 7, 3, 9, 9, 9, 9, 9, 9, 1, 1, 6, 6, 3, 8, 8, 8, 8, 5, 5 ]
// console.log(numbers)
//check if the number is repeated only an odd number of times 
// function findOdd(numbers){
    //set a count to number of times it appears
    // var count = 0;
    //loop through numbers
//     for(var i=0; i< numbers.length; i++){
//         //loop through numbers again
//         for(var d=0; d< numbers.length; d++){
//             //compare iterators if equal count
//             if(numbers[i] === numbers[d]){
//                 count++
//             }
//         }
//         //if the count is an odd value return the iterator with the odd value
//         if(count % 2 == 1){
//             return[i]
//         }
//     }
// }
// console.log(findOdd(numbers));
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
// #2 questions
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// let blocks=""
//blocks is an empty string to start 
// for(var triangle=0; triangle < 7; triangle= triangle + 1){
  //add a block for each iteration of the triangle
	// console.log(blocks+="#")
// }

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// for(var numbers=0; numbers < 100; numbers++){
//   //check for numbers that hold both conditions first
// 	if(numbers % 3 && numbers % 5){
//     	console.log("FizzBuzz")
//     }
//     //check for numbers that hold the condition for the larger number 
//   	else if(numbers % 5){
//     	console.log("Buzz")
//     }
//     //then check condition for the smaller number
//   	else(numbers % 3)
//     	console.log("Fizz")
// }

//making a chess board
// let size=8;
// let pattern="";
// for(var i=0; i < size; i++){
//   //first loop iterates for the shape of the board 
//       for(var b=0; b < size; b++){
//         //second loop find the pattern if the remainder is even or odd and prints the pattern
//         //if the addtion of the the two iterator remainder is 2 
//         if ((i + b) % 2 == 0 ){
//         pattern += " "
//         }else {
//         	pattern += "#"
//         }
//         //then skip to the next row after size
//       }pattern +="\n"
// }console.log(pattern)



// // #4 create a range function that takes a start and end and returns and array
// function range(start, end, increment){
//     array=[]
//     var current= start;
//     increment = increment || 1;
//     //iterate by one value up 
//     if(increment > 0){
//         //keep iterating if the end is less then the start/current not just < we want to include the end value in the array
//       while(current <= end){
//       array.push(current)
//         current+=increment;
//       }
//     }else{
//         //iterate while the current/start is great then end if the increment is negative 
//         while(current >= end){
//         array.push(current)
//         current+=increment;
//         }
//     }
//     return array;  
//   }

// // create a function that sums all iterators 
// function sum(range){
//     //create a value to hold the total itertators
//     total=0;
//   for(var i in range){
//       //add the value of the right to the variable 
//         total += range[i]
        
//   }return total
// }

// //function that takes an array as argument and produces a new array that has the same elements in the inverse order
// function reverseArray(array){
//     //create new array
//     arr=[];
//     //push the reverse array to the new arr
//     arr.push(array.reverse());
//     return arr;
// }

// //now without the reverse method
// function reverseArray(array){
//     arr=[];
//     //start the loop at the length -1 and decrement 
//     for (var i= array.length-1; i >=0; i--){
//         arr.push(array[i])
//     }
//     return arr;
// }

// //this works for even number of iterators for odd number the two middle iterators will switch
// function reverseArrayInPlace(arrayValue){
//     //iterate through the array divided by 2 
//     for(var i=0; i <= arrayValue.length/2; i++){
//       //set i value to change 
//       let change= arrayValue[i];
//       //change will update after iterating 
//       //will now be the the length minus one and i 
//       arrayValue[i]= arrayValue[arrayValue.length-1 -i];
//       //then the change is updated for the next iteration
//       arrayValue[arrayValue.length-1 -i]= change; 	
//     }return arrayValue	
//   }

// // function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument
// function arrayToList(){
// 	list={
//       value:x,
//         rest:{}
//     };
//   	for (var i= array.length-1; i >=0; i--){
    	
//     }
// }