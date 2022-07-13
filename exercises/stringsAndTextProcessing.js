// Uppercase Check
// function isUppercase(text) {
//   return (text === text.toUpperCase());
// }

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true


// Delete Vowels
// const VOWELS = ['a', 'e', 'i', 'o', 'u'];

// function removeVowels(arr) {
//   return arr.map(string => {
//     let strArr = string.split("");
//     let noVowelsArr = [];
//     strArr.forEach(char => {
//       if (!VOWELS.includes(char.toLowerCase())) {
//         noVowelsArr.push(char);
//       }
//     });
//     return noVowelsArr.join("");
//   });
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


// Lettercase Counter
// function letterCaseCount(text) {
//   let counts = {};
//   counts["lowercase"] = 0;
//   counts["uppercase"] = 0;
//   counts["neither"] = 0;
//   text.split("").forEach(char => {
//     if (char >= 'a' && char <= 'z') {
//       counts["lowercase"]++;
//     } else if (char >= 'A' && char <= 'Z') {
//       counts["uppercase"]++;
//     } else {
//       counts["neither"]++;
//     }
//   });
//   return counts;
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


// Capitalize Words
// function wordCap(text) {
//   return text.split(" ").map(word => {
//     if (word.length === 1) {
//       return word.toUpperCase();
//     }
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join(" ");
// }

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'


// Swap Case
// function swapCase(text) {
//   let textArr = text.split("");
//   return text.split("").map(char => {
//     if (char >= 'a' && char <= 'z') {
//       return char.toUpperCase();
//     } else if (char >= 'A' && char <= 'Z') {
//       return char.toLowerCase();
//     } else {
//       return char;
//     }
//   }).join("");
// }

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


// Staggered Caps (Part 1)
// function staggeredCase(text) {
//   let capitalize = true;
//   return text.split("").map(char => {
//     if (capitalize) {
//       capitalize = !capitalize;
//       return char.toUpperCase();
//     } else {
//       capitalize = !capitalize;
//       return char.toLowerCase();
//     } 
//   }).join("");
// }

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"


// Staggered Caps (Part 2)
// function staggeredCase(text, countNonAlphabetic = false) {
//   let capitalize = true;
//   return text.split("").map(char => {

//     if (!countNonAlphabetic) {
//       // If non-alphabetic, don't toggle the boolean flag and just return the char
//       if (char.toUpperCase() === char.toLowerCase()) {
//         return char;
//       }
//     }

//     if (capitalize) {
//       capitalize = !capitalize;
//       return char.toUpperCase();
//     } else {
//       capitalize = !capitalize;
//       return char.toLowerCase();
//     } 
//   }).join("");
// }

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );
// console.log(staggeredCase('I Love Launch School!', true));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS', true));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers', true));   // "IgNoRe 77 ThE 4444 nUmBeRs"
// console.log(staggeredCase('I Love Launch School!', false));       
// console.log(staggeredCase('ALL_CAPS', false));                     
// console.log(staggeredCase('ignore 77 the 4444 numbers', false));   


// How Long Are You?
// function wordLengths(text = "") {
//   if (text.length < 1) {
//     return [];
//   }
//   return text.split(" ").map(word => {
//     return `${word} ${word.length}`;
//   });
// }

// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []


// Search Word (Part 1)
function searchWord(target, text) {
  // Would exclude "sed," for instance
  return text.split(" ").reduce((count, word) => {
    if (word.toLowerCase() === target.toLowerCase()) {
      return count + 1;
    }
    return count;
  }, 0);

  // Would include "seda", for instance
  // const regex = new RegExp(target, "gi");
  // const matches = text.match(regex);

  // return matches ? matches.length : 0;
}

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      // 3


// Search Word (Part 2)
function searchWord(target, text) {
  // Would exclude "sed," for instance
  return text.split(" ").map(word => {
    if (word.toLowerCase() === target.toLowerCase()) {
      return `**${word.toUpperCase()}**`;
    } else {
      return word;
    }
  }).join(" ");
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"