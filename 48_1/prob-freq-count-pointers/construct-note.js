// add whatever parameters you deem necessary
function getFreq(str) {
    let obj = {}
    for (let i=0; i < str.length; i++) {    
        if (obj[str[i]]) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1
        }
        
    }
    return  obj
}
function constructNote(str1, str2) {
    if (str2.length === 0) return false
    if (str1.length === 0) return true
    let freq1 = getFreq(str1)
    let freq2 = getFreq(str2)
    console.log(freq1)
    console.log(freq2)
    for (let i=0; i < str1.length; i++) {
        if (!freq2[str1[i]]) return false
        else if (!(freq2[str1[i]] >= freq1[str1[i]])) return false        
    }

    return true

}
