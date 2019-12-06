"use strict";

function add(string_number) {
  let negatives = [];
  if (string_number == "") {
    return 0;
  }
  let result = 0;
  
  let stringSplit = string_number.split(/^\/.*|\;|,|:|\*|%|:D|\(|\n|4(?=\d)|4(?=\d)/g);

  for (let i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i] < 0) {
      negatives.push(stringSplit[i]);
    } else if (Number(stringSplit[i]) >= 1000) {
      continue;
    }
    for (var j = 0; j < negatives.length; j++) {
      
        if (stringSplit[i] < 0){
          throw new Error("Negatives not allowed "+negatives);
    }
    }
    result = result + Number(stringSplit[i]);
  }
  
    

  return result;
}


module.exports = add;
