function processData(myArray){
    let max = -99999; let sndMax = max;
    for(let i = 0; i < myArray.length; i++){
        if(max < myArray[i]){
            sndMax = max;
            max = myArray[i]
        }else if ( (max > myArray[i]) && (sndMax < myArray[i])){
            sndMax = myArray[i]}
    }console.log(sndMax);
}