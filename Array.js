let marlonArray = [2, 7, 9, 5, 3, 8, 4, 3, 6]
let numericArray = [7, 1, 0, 8, 6, 3, 5, 9]

function organizeMyArray (a, b){
    // return a > b
    //arrow function (?)
    return a - b
}

function decreaseMyArray (a, b){
    return b - a
}

marlonArray.reverse()
console.log('Array invertida:' + marlonArray)
console.log('Array em ordem crescente:' + numericArray.sort(organizeMyArray))
console.log('Array em ordem descrescente:' + numericArray.sort(decreaseMyArray))
