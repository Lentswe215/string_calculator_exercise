"use strict";

function add(StringNumber) {
  //checking if the string in empty and then return 0 if it is empty
  if (StringNumber == "") {
    return 0;
  }

  let replaceNewLinewithComma = StringNumber.replace("\n", ","); //replacing new line character with a comma
  let stringSplit = replaceNewLinewithComma.split(",");//using comma to split  
  RegExp.escape = function escapeRegexCharacters(regexDelimiters) {//function to escape everey regex literal characters in the string
    return regexDelimiters.replace(/[-\/\\^$*+?()\[\].{}]/g, "\\$&");
  };
  
  // getting the default delimiters from the string if the string starts with 2 forward slashes
  if (StringNumber.startsWith("//")) {
    
    let delimiterSectionOfString = StringNumber.match(/\/\/.+?\n/)[0];//getting the delimiter section of string

    let delimiters = delimiterSectionOfString.match(/(?<=\/\/).+?(?=\n)/)[0];//getting the delimiter

    delimiters = new RegExp(RegExp.escape(delimiters), "g");//changing the delimiter to regex and escaping regex literal characters

    let numberSectionOfString = StringNumber.match(/(?<=\n).*/g)[0]; // getting the number section from the string

    stringSplit = numberSectionOfString.replace(delimiters, ",").split(",");

    // When delimiters are inside sqaure brackets
    if (delimiterSectionOfString.startsWith("//[")) {
      let delimiterSectionOfString = StringNumber.match(/\/\/.+?\n/)[0];
      let delimitersWithBrackets = delimiterSectionOfString.match(/(?<=\/\/).+?(?=\n)/)[0];
      let delimitersWithoutOutBrackets = delimitersWithBrackets.match(/(?<=\[).*(?=\])/g)[0];// removing the outer square brackets

      let delimitersWithoutBrackets = delimitersWithoutOutBrackets.replace(/\]\[/g,"|");// removing inner square brackets
      delimitersWithoutBrackets = new RegExp(RegExp.escape(delimitersWithoutBrackets),"g"); 
      stringSplit = numberSectionOfString.replace(delimitersWithoutBrackets, ",").split(",");
    }
  }
  let negativeNumbers = [];//an array for negative numbers

  let Negatives = /-\d+?/g; //regex to match negative numbers

  if (StringNumber.match(Negatives)) {
    throw new Error("Negatives not allowed ") + StringNumber.match(Negatives);
  }
  let result = 0;
  for (var i = 0; i < stringSplit.length; i++) {//looping through the splited StringNumber

    if (stringSplit[i] < 0) {//checking if 2 of the digit is less than 0

      negativeNumber.push(stringSplit[i]);//negative number pushed into the negativeNumbers array
      
          throw new Error("Negatives not allowed " + negativeNumbers);//throwing an error when negative number are found and outputing the negative numbers
        
    if (Number(stringSplit[i]) >= 1000) {//check if 1 of the number is more than thousand and ignorign it while calculaing the rest of the numbers
      continue; 
    }
    result = result + Number(stringSplit[i]);//calculations
  }
  if (isNaN(result) || StringNumber.match(/\D$/)) {//to throw an error when the input is invalid
    throw new Error("Invalid input");
  }
  return result; //returning the sum of the calculations
}

module.exports = {
  add
};
