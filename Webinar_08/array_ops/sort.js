
let arr = [6,3,9,1,7,2,14,26,35]
console.log(arr.sort())
// JS by default does a lexicographical sort

function compare (a,b){
    return (a%10)-(b%10);
}
arr.sort(compare)
// arr.sort(function(a,b){
//     console.log(arr)
//     console.log(a+ " " + b)
//     return a-b
// })
console.log(arr)