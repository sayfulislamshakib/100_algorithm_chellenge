
//For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, 
//the output should be arrayReplace(inputArray, elementToReplace, substrationElem) = [3, 2, 3].

function arrayReplace(inputArray,elementToReplace,substrationElem){
    inputArray.forEach((element,index) =>{
      if(element === elementToReplace){
        inputArray[ index ] = substrationElem
      }
    })
  console.log( inputArray )
  }
  arrayReplace( [1,2,1],1,3 )
  
  
