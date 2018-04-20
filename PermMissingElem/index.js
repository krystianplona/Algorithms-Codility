function solution(A) {
  var sorted = A.sort((a,b) => {return a-b})
  
  if (sorted.length == 0) {
      sorted.push(0)
  }
  
  for (var i=1; i<=sorted.length; i++) {
     if (sorted[i-1] !==i ) {
         return i
     }
  }
  
  return sorted[sorted.length-1] + 1
}

function solution2(A){
    var expected = (A.length + 1) * (A.length + 2) / 2

    for(elem in A){
        expected -= elem
    }
    return expected
}



