/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base
  if (nums.length === 0) return 1
  //standard
  return nums[0] * product(nums.slice(1))

}

/** longest: return the length of the longest word in an array of words. */
function longest(words, longestWord = 0) {
  //base
  if (words.length === 0) return longestWord
  // //standard
  if (words[0].length > longestWord) {
    return longest(words.slice(1), words[0].length)
  } else {
    return longest(words.slice(1), longestWord)
  } 
} 

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, retStr = '') {
  //base
  if (idx >= str.length) return retStr
  // //standard
  retStr += str[idx]
  return everyOther(str, idx + 2, retStr)

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  //base
  let leftIdx = idx
  let rightIdx = str.length - idx - 1
  if (leftIdx >= rightIdx) return true
  //standard
  if (str[leftIdx] !== str[rightIdx]) return false

  return isPalindrome(str, idx + 1)

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, count=0) {
  //base
  if (arr.length === 0) return -1
  //standard
  if (arr[0] === val) {
    return count
  }
  else {
    return findIndex(arr.slice(1), val, count + 1)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return ''

  return str[str.length - 1] + revString(str.slice(0, str.length - 1))

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[]) {
  let strArr = []
  for (let key in obj) {
    if (typeof obj[key] === 'string') strArr.push(obj[key])
    if (typeof obj[key] === 'object') strArr.push(...gatherStrings(obj[key]))
  }
  return strArr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}


let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};
// console.log(gatherStrings(nestedObj))
module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
