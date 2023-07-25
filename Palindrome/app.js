


/* Method 1 Palindrome checker      
                                        

function palindromeCheck1(str){       // L1 - create a function where we can input a 'string', and then perform following to said string
  return(                             // L2 - return() -> will output a boolean value base on the === operator, true or false
    str.replace(/[\W_]/g, "").toLowerCase() ===   // L3 - " First Version" delete all non alpha numeric elements, and lowercases remaining characters -> "ivudang"

    str                        //L4 - "second version" aka the reversed version
    .replace(/[\W_]/g, "")    //L5 - deletes all non-alpha numeric elements
    .toLowerCase()           // L6 - lowercases the remaining characters
    .split("")              // L7 - splits the characteres into elements within an array Because Strings Are immutable!!!(cannot be  altered)
    .reverse()             // L8 - And then we can reverse the elements within the array -> ["g", "n", "a", "d", "u", "v", "i"]
    .join("")             // L9 - and then convert it back into a string -> "gnaduvi"
                         // THEREFORE, "ivudang" === "gnaduvi" -> False
  );
}
// Test the sample

console.log(palindromeCheck1("Race Car_")) // true
console.log(palindromeCheck1(" i Vu_Dang")) // false

*/

// Method 2 

function PalindromeCheck2(str){      
  const nonAlphaNum = /[\W_]/g;

  let firstVersion = str.toLowerCase().replace(nonAlphaNum, '');
  let reversedVersion = firstVersion.split('').reverse().join('');

  return reversedVersion === firstVersion;
}
console.log(PalindromeCheck2("Race Car_")) // true
console.log(PalindromeCheck2(" i Vu_Dang")) // false

// L3 - created our first version of the string , where we converted all elements to lower case, and removed all non-alpha-numeric characters
// .replace syntax -> .replace(find value, new value) // so it finds the non-alpha-nums and replaces it with the '' which means nothing aka deleting the element
// str.LowerCase() -> "i vu_dang"
// .replace(nonAlphaNum, ''); -> "ivudang"

// L4 - created our second or reversed version of the string, where we took our first version and applied a few more methods to it.
// first version -> takes our modified sstring earlier that has been converted to all lower-case and has all non-alpha-numeric characters removed
// .split('') -> creates a new array with all characters in the string seperated into single characters -> ["i", "v", "u","d","a","n","g"]
// .reverse () -> reverse the order of the elements in an array -> ["g", "n", "a", "d", "u", "v", "i"]
//.join('') -> this will convert an array of elements into one string -> "gnaduvi" 

// L4 - reversedVersion == firstVersion   -> "ivudang" === "gnaduvi"      -> False


// ----------Start Web API-------------------

//WEB API - JAVASCRIPT TO HTML

let submitButtonEvent = document.getElementById('submitButton');

submitButtonEvent.addEventListener("click", function(){
  'use strict';

  let value = document.getElementById("inputString").value;
  let notification = document.getElementById("notification");
  let displayWord = document.getElementById("displayWord");

  if(PalindromeCheck2(value)){
    notification.innerHTML ="\"" + value.toString() + "\"" + ` ` + `is a Palindrome!`;
    displayWord.innerHTML = ` FORWARDS: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards:` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
  }else{
    notification.innerHTML ="\"" + value.toString() + "\"" + ` ` + `is NOT a Palindrome!`;
    displayWord.innerHTML = ` FORWARDS: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards:` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
  }

});

//--------End Web API-------------------------
  