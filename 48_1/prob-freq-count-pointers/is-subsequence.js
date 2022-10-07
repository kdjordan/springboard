// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    if (str1.length === str2.length || str1.length > str2.length) return false
    let charCount = 0
    for (let char of str1) {
        if (!str2.includes(char)) return false
        else charCount++
    }
    if (charCount !== str1.length) return false
    else return true

}

