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
  if (!isNaN(str)) return
  // //standard
  return str[1] + everyOther(str.slice(2))

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}


console.log(everyOther('abababa'))

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
