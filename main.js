const Array = require('./array');

function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
    
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10); 

  console.log(arr.get(0));
  arr.pop(); 
  arr.pop(); 
  arr.pop(); 
  arr.pop(); 
  arr.pop(); 
  arr.pop(); 
  console.log('arr is ', arr);
    
  console.log('arr is ', arr);
}

main();

//5 - URLify a String
//finding ' ' and replacing with '%20'
const urlIfy = function(string) {
  return string.replace(/ /g, '%20');
};
console.log(urlIfy('tauhida parveen'));
console.log(urlIfy('www.thinkful.com /tauh ida parv een'));
//6 - Filtering an Array
//test each number to see if less than 5, remove numbers matching true.
const filter5 = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if ( array[i] >= 5 ){
      newArray = [...newArray, array[i]];
    }
  }
  return newArray;
};
console.log(filter5([4,6,-3,5,-2,1]));
//7 - Max sum in the Array
// store greatestSum, add entire array over again.  anything that results in sum > greatestSum overwrites greatestSum
const greatestSum = function(array) {
  let greatestVal = 0;
  if (array[0] > 0) {
    greatestVal += array[0] + greatestSum(array.slice(1, array.length));
  } else if ((array[0] + array[1]) > 0) {
    greatestVal += array[0] + array[1] + greatestSum(array.slice(2, array.length));
  }
  return greatestVal;
};

console.log('7: ', greatestSum([4,6,-3,5,-2,1]));
console.log('7: ', greatestSum([0,2,6,-10,12,-12,18,10,-2]));
//8 - Merge Arrays
//2 sorted arrays
const merge = function(array1, array2) {
  let newArray = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      newArray = [...newArray, array1[i]];
      i++;
    } else {
      newArray = [...newArray, array2[j]];
      j++;
    }
  }
  if (i !== array1.length) {
    while (i < array1.length) {
      newArray = [...newArray, array1[i]];
      i++;
    }
  }
  if (j !== array2.length) {
    while (j < array2.length) {
      newArray = [...newArray, array2[j]];
      j++;
    }
  }
  return newArray;
};

console.log(merge([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));
//9 - Remove Characters
//deletes input character from string
const deleteChars = function(string, toDelete) {
  let charArray = toDelete.toCharacterArray();
  // string.replace(toDelete,)
};

console.log(deleteChars('somestring', 'absd'));
//10 - Products

//11 - 2D Array

//12 - String Rotation