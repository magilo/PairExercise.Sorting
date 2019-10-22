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


  while (firstHalf.length > 0 && secondHalf.length > 0) {
      if (firstHalf[0] < secondHalf[0]) {
        finalArray.push(firstHalf[0]);
        firstHalf = firstHalf.slice(1);
      } else {
        finalArray.push(secondHalf[0]);
        secondHalf = secondHalf.slice(1);
      }
    }

  if (firstHalf.length <= 0) {
      finalArray = [...finalArray, ...secondHalf];
    } else {
      finalArray = [...finalArray, ...firstHalf];
    }

  //return one array
  return finalArray
}


