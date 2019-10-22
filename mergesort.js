function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  let length = wholeArray.length
  let lengthHalved = Math.ceil(length / 2)

  let firstHalf = wholeArray.slice(0, lengthHalved)
  let secondHalf = wholeArray.slice(lengthHalved)
  return [firstHalf, secondHalf];
}

// split([1, 2, 3, 4, 5])


function merge(firstHalf, secondHalf) {
  let i = 0
  let j = 0
  let finalArray = []
  let firstLen = null
  let secondLen = null


  let firstLastNum = firstHalf[firstHalf.length - 1]
  let secondLastNum = secondHalf[secondHalf.length - 1]

  if (firstLastNum < secondLastNum) {
    firstLen = firstHalf.length
    secondLen = secondHalf.legnth
  } else {
    firstLen = secondHalf.length
    secondLen = firstHalf.length
  }

  while (i <= secondLen && j < firstLen) {
    if (firstHalf[i] < secondHalf[j]) {
      finalArray.push(firstHalf[i])
      i++
    } else {
      finalArray.push(secondHalf[j])
      j++
    }
  }
  //return one array
  return finalArray
}
