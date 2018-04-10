function OddOccurrencesInArray(array){
  
  for(let i=0; i < array.length; i++){
    var currentValue = array[i];
    array[i] = null;
    if(currentValue !== null) {
      if(array.indexOf(currentValue) < 0){
        return currentValue
      }
      else{
        array[array.indexOf(currentValue)] = null
      }
    }
  }
}

var exArray = [9,3,9,3,9,7,9];
