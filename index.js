// Code your solution here!
function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

function reverseString(myString) {
    if (myString.length < 2) {
        return myString;
    } else {
        return reverseString(myString.substring(1)) + myString[0];
    }
}

//palindrome: str[0] == str[str.length-1]

function isPalindrome(str) {
    let l = str.length
    if (l < 2) {
        return true
    } else if (str[l - 1] === str[0]) {
        return isPalindrome(str.substring(1, l - 1))
    } else {
        return false
    }
}

function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return Math.max(arr.pop(), maxOf(arr))
    }
}

function includesNumber(arr, n) {
    if (!arr.length) {
        return false
    } else if (arr[0] === n) {
        return true
    } else {
        return includesNumber(arr.slice(1), n)
    }
}
