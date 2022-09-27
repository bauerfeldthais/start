let marlonArray = [2, 7, 9, 5, 3, 8, 4, 3, 6]

function reverse(originalArray){
    let revertedArray = []
    //se n deixar ele vazio, ele ira imprimir:
    // [2, 7, 9, 5, 3, 8, 4, 3, 6, 6, 3, 4, 8, 3, 5, 9, 7, 2]
    for (let i = originalArray.length - 1; i >= 0; i--){
        revertedArray.push(originalArray[i])
    }
    return revertedArray
}

let array = reverse(marlonArray)
console.log(array)

//function organizeMyArray(originalArray2){
//  
//    for (let i = 0; i < originalArray2.length; i++){
//        let number = i
//        for (let j = i + 1; j < originalArray2.length; j++){
//            if (originalArray2[i] > originalArray2[j])
//                number = j
//            let arrayItem = originalArray2[i]
//            sorted[i] = originalArray2[number]
//            sorted[number] = arrayItem
//        }
//    }
// 
//    return sorted
//}

//let sortedArray = organizeMyArray(marlonArray)
//console.log(sortedArray)


function sorted(originalArray) { 
    let number = originalArray.length
    //se eu por acaso fizer .lenght antes, não precisaria fazer no restante correto?    
    for(let i = 0; i < number; i++) {
        
        let array = i
        for(let j = i + 1; j < number; j++){
            if(originalArray[j] < originalArray[array]) {
                array=j 
            }
         }
        //lembrei dos booleanos, por acaso era uma solução
         if (array != i) {
             
             let arrayItem = originalArray[i]
             originalArray[i] = originalArray[array]
             originalArray[array] = arrayItem;     
        }
    }
    return originalArray
}

let marlonArray = [2, 7, 9, 5, 3, 8, 4, 3, 6]
let sortedArray = sorted(marlonArray)
console.log(sortedArray)

function sorted2(originalArray){
    let array = sorted(originalArray)
    return reverse(originalArray) 
  }
  
  
  let marlonArray = [2, 7, 9, 5, 3, 8, 4, 3, 6]
  
  let array = reverse(marlonArray)
  console.log(array)
  
  let sortedArray = sorted(marlonArray)
  console.log(sortedArray)
  
  let array2 = sorted2(marlonArray)
  console.log(array2)