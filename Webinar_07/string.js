let p = 'arnav'
let str = `this is ${p}\'s string`
let longStr = 'this is \n \
a very long \
string'
//console.log(longStr.length)

// let s = "this has some data here"
// let key = "has"
// console.log(s.indexOf(key))

// let s = "this is a easy job"
// let s2 = "ab aab abbcd ba aab"
// console.log(s2.indexOf("ab", 1))
// console.log(s2.lastIndexOf("ab"))

let mainStr = "this is-a-long string"
let smallstr = mainStr.slice(2,6) //negative index can be added
console.log(smallstr)
console.log(mainStr.substring(7,10)) //no negative index
console.log(mainStr.substr(5,4))