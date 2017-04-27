/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var strbinaryX = convertToBinary(x);
    var strbinaryY = convertToBinary(y);
    var hammingDistance = 0;
    
    var returnArray = formatStrings(strbinaryX,strbinaryY)
    
    strbinaryX = returnArray[0]
    strbinaryY = returnArray[1]
    
    var count = 0;
    
    for(count; count < strbinaryX.length; count++) {
        if(strbinaryX[count] !== strbinaryY[count]){
            hammingDistance++;
        }
    }
    
    return hammingDistance;
    
    
    
  //  return hammingDistance;
    
    
};

convertToBinary = function(x) {
    return x.toString(2);
};

formatStrings = function(x,y) {
    var charDifference = x.length - y.length
    
    if(charDifference > 0) {
        y = padStrings(y, charDifference)
    } else if (charDifference < 0) {
        x = padStrings(x, charDifference * -1)
    } else {
        
    }
    
    return [x,y]
};

padStrings = function (x,reqLength){
    var origString = x;
    
    for(count = 0; count < reqLength; count++){
        origString = "0" + origString;
    }
    
    return origString;
};
