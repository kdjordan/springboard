/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base
  if (nums.length === 0) return 0
  //standard
  return nums[0] + product(nums.slice(1))

}

/** longest: return the length of the longest word in an array of words. */
//['at','become']
function longest(words) {
  //base
  if (words.length === 0) return 
  //standard
  return words[0] > words[1] ? words[0] : words[1]
} 

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //base
  if (str.length === 1) return ''
  // //standard
  return str[1] + everyOther(str.slice(2))

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //base
  if (str.length === 1) return true
  //standard
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1))
  } else {
    return false
  }

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
    count++
    return findIndex(arr.slice(1), val, count)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return ''

  return str[str.length - 1] + revString(str.slice(0, str.length - 1))

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}


console.log(revString('abcde'))

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
