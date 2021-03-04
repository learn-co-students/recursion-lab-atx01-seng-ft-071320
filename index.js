// Code your solution here!

function printString(string) {
    if (string.length === 1) {
        console.log(string)
    } else {
        console.log(string[0])
        printString(string.slice(1))
    }
}

function reverseString(string, rString = '') {
    if (string.length < 1) {
        return rString
    } else {
        let lastLetter = string[string.length - 1]
        let rS = rString += lastLetter
        let s = string.slice(0, string.length - 1)
        return reverseString(s, rS)
    }

    //Non recursive
    // for (let i = string.length - 1; i >= 0; i--) {
    //     rString += string[i]
    // }
    // return rString;
}

// function isPalindrome(string, index = string.length - 1, pString='') {
//     pString += string[index]
//     if (index === 0) {
//         return pString === string;
//     }

//     isPalindrome(string, index - 1, pString)
//     //Non recursive
//     // let p = [];
//     // for (let i = string.length - 1; i >= 0; i--) {
//     //     p.push(string[i]);
//     // }
//     // if(p.join('') === string) return true
//     // else return false
// }

function isPalindrome(myString) {
    let l = myString.length;
  
    if (l < 2) {
      return true;
    } else if (myString[l - 1] === myString[0]) {
      return isPalindrome(myString.substring(1, l - 1));
    } else {
      return false;
    }
  }
  
  function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
  }
  
  function maxOf(myArray) {
    if (myArray.length === 1) {
      return myArray[0];
    } else {
      return Math.max(myArray.pop(), maxOf(myArray));
    }
  }
  
  function includesNumber(myArray, myNumber) {
    if (!myArray.length) {
      return false;
    } else if (myArray[0] === myNumber) {
      return true;
    } else {
      return includesNumber(myArray.slice(1), myNumber);
    }
  }









//Solution
// function printString(myString) {
//     console.log(myString[0]);

//     if (myString.length > 1) {
//       let mySubString = myString.substring(1, myString.length);
//       printString(mySubString);
//     } else {
//       return true;
//     }
//   }

//   function reverseString(myString) {
//     if (myString.length < 2) {
//       return myString;
//     } else {
//       return reverseString(myString.substring(1)) + myString[0];
//     }
//   }

//   function isPalindrome(myString) {
//     let l = myString.length;

//     if (l < 2) {
//       return true;
//     } else if (myString[l - 1] === myString[0]) {
//       return isPalindrome(myString.substring(1, l - 1));
//     } else {
//       return false;
//     }
//   }

//   function addUpTo(myArray, index) {
//     return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
//   }

//   function maxOf(myArray) {
//     if (myArray.length === 1) {
//       return myArray[0];
//     } else {
//       return Math.max(myArray.pop(), maxOf(myArray));
//     }
//   }

//   function includesNumber(myArray, myNumber) {
//     if (!myArray.length) {
//       return false;
//     } else if (myArray[0] === myNumber) {
//       return true;
//     } else {
//       return includesNumber(myArray.slice(1), myNumber);
//     }
//   }