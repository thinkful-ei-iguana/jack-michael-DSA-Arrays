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

  //   console.log(arr.get(0));
  //   arr.pop(); 
  //   arr.pop(); 
  //   arr.pop(); 
  //   arr.pop(); 
  //   arr.pop(); 
  //   arr.pop(); 
  //   console.log('arr is ', arr);
    
  console.log('arr is ', arr);
}

main();

//5 - URLify a String
//finding ' ' and replacing with '%20'
const urlIfy = function(string) {
  return string.replace(/ /g, '%20');
};
console.log('5: ', urlIfy('www.thinkful.com /tauh ida parv een'));
console.log('5: ', urlIfy('tauhida parveen'));

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
console.log('6: ', filter5([4,6,-3,5,-2,1]));

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

console.log('8: ', merge([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));

//9 - Remove Characters
//deletes input character from string
const deleteChars = function(string, toDelete) {
  let charArray = [...toDelete];
  charArray.forEach(char => { 
    let replacing = new RegExp(char, 'gi');
    string = string.replace(replacing, '');
  });
  
  return string;
};

console.log('9: ', deleteChars('someString', 'absd'));

//10 - Products
//Products for remaining indices given index.
const products = function(array) {
  let productArray = [];
  for (let i = 0; i < array.length; i++){
    let whatever = 1;
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        whatever = whatever*array[j];
      }
    }
    productArray.push(whatever);
  }
  return productArray;
};

console.log('10: ', products([1,3,9,4]));

//11 - 2D Array
const twoDSearch = function(array) {
  let outputArray = array;
  let columns = [];
  let rows = [];
  //mark where zeros occur
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j] === 0) {
        rows.push(i);
        columns.push(j);
      }
    } 
  }
  console.log('coordinates of zeros: ', rows, columns);

  rows.forEach(row => {
    for (let i = 0; i < outputArray[0].length; i++){
      outputArray[row][i] = 0;
    }
  });
  columns.forEach(column => {
    for (let i = 0; i < outputArray.length; i++){
      outputArray[i][column] = 0;
    }
  });

  return outputArray;
};

console.log('11: ', twoDSearch([
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
])
);

//12 - String Rotation
const rotation = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  //substring of str1 === substring of str2 otherwise check next possible substring
  //different lengths = false;
  for (let i = 1; i < str1.length; i++) {
    // console.log('substr1: ', str1.substring(0, i));
    // console.log('substr2: ', str2.substring(str1.length - i, str1.length));
    if (str1.substring(0, i) === str2.substring(str1.length - i, str1.length)) {
      return true;
    }
  }
  return false;
};

console.log('12: ', rotation('arizona','izonaar'));