"use strict";

function add(StringNumber) {
  //checking if the string in empty and then return 0 if it is empty
  if (StringNumber == "") {
    return 0;
  }

  let replaceNewLinewithComma = StringNumber.replace("\n", ","); //replacing new line character with a comma
  let stringSplit = replaceNewLinewithComma.split(",");
  RegExp.escape = function escapeRegexCharacters(regexDelimiters) {
    return regexDelimiters.replace(/[-\/\\^$*+?()\[\].{}]/g, "\\$&");
  };
  if (StringNumber.startsWith("//")) {
    // getting the default delimiters from the string if the string starts with 2 forward slashes
    let delimiterSectionOfString = StringNumber.match(/\/\/.+?\n/)[0];
    let delimiters = delimiterSectionOfString.match(/(?<=\/\/).+?(?=\n)/)[0];
    delimiters = new RegExp(RegExp.escape(delimiters), 'g')

    let numberSectionOfString = StringNumber.match(/(?<=\n).*/g)[0]; // getting the number section from the string

    stringSplit = numberSectionOfString.replace(delimiters, ",").split(",");

    if (delimiterSectionOfString.startsWith("//[")) {
        let delimiterSectionOfString = StringNumber.match(/\/\/.+?\n/)[0];
    let delimitersWithBrackets = delimiterSectionOfString.match(/(?<=\/\/).+?(?=\n)/)[0];
      let delimitersWithoutOutBrackets = delimitersWithBrackets.match(/(?<=\[).*(?=\])/g)[0];

      let delimitersWithoutBrackets = delimitersWithoutOutBrackets.replace(/\]\[/g,"|");
      delimitersWithoutBrackets = new RegExp(RegExp.escape(delimitersWithoutBrackets),"g");
      stringSplit = numberSectionOfString
        .replace(delimitersWithoutBrackets, ",")
        .split(",");
    }
  }
  let negativeNumber = []
  let Negatives = /-\d+?/g;
  if (StringNumber.match(Negatives)) {
    throw new Error("Negatives not allowed ") + StringNumber.match(Negatives);
  }
  let result = 0;
  for (var i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i] < 0) {
      negativeNumber.push(stringSplit[i]);
      for (var j = 0; j < negativeNumber.length; j++) {
        if (negativeNumber < 0) {
          throw new Error("Negatives not allowed " + negativeNumber);
        }
      }
    }
    if (Number(stringSplit[i]) >= 1000) {
      continue;
    }
    result = result + Number(stringSplit[i]);
  }
  if(isNaN(result) || StringNumber.match(/\D$/)){
      throw new Error("Invalid input")
  }
  return result;
}

// console.log(add("") + " this should return 0")
// console.log(add("1,1"));
// console.log(add("1,2,3,4"))
// console.log(add("//;\n1000;1;2;"))
// console.log(add("//(-_-')\n1(-_-')2"));
// add("//[*][&]\n1*2&3");
// console.log(add(" //[abc][777][:(]\n1abc27773:(1"))
// console.log(add("-1,-2,3,4"))
// console.log(add("1001,2,3,4"))
module.exports = {
  add
};
