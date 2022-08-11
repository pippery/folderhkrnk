// const arr = [1,1,0,-1,-1]
// function plusMinus(arr){
//  console.log(`${(arr.filter(n => 0 < n && n <= 100 ).length/arr.length).toFixed(6)} \n${(arr.filter(n => 0 > n ).length/arr.length).toFixed(6)} \n${(arr.filter(n => n===0 ).length/arr.length).toFixed(6)}`)
  
//   }
  

// plusMinus(arr)


// let newArr=[]
// for (let j =0; j<arr.length;j++) {
// newArr.push ((arr.reduce((n,i) => n + i)-arr[j]))
// }
// console.log(`${BigInt(newArr.reduce((n,i) => Math.max(n,i)))} ${BigInt(newArr.reduce((n,i) => Math.min(n,i)))}`)



// function timeConversion(s){
//   let sliced = s.slice(2);
//   let hour=Number(s.split(':')[0]);
//  if (s.toLowerCase().endsWith('pm') && hour < 12) {
//   console.log ((hour+12 + sliced).padStart(10, '0').toLowerCase().replace('pm',''))
// } else if (s.toLowerCase().endsWith('pm') && hour > 12) {
//   console.log ((hour-12 + sliced).padStart(10, '0').toLowerCase().replace('pm',''))
// } else if (s.toLowerCase().endsWith('pm') && hour === 12){
//   console.log (s.toLowerCase().replace('pm',''))
// }else if (s.toLowerCase().endsWith('am') && hour === 12){
//   console.log (('00' + sliced).padStart(10, '0').toLowerCase().replace('am',''))
// }else if (s.toLowerCase().endsWith('am') && hour < 12){
//   console.log (s.toLowerCase().replace('am',''))
// } else if (hour > 12){
//   console.log(((hour - 12) + sliced +'PM').padStart(10, '0'))
// } else if (hour <= 12) {
//   console.log((s +'AM').padStart(10, '0'))
// }
// else {
//   console.log(s)
// }   
// }
// timeConversion('12:00:00AM')


// function breakingRecords(scores) {
//   // Write your code here
//   let min = 0;
//   let max = 0;
//   let minScore = scores[0];
//   let maxScore = scores[0];

//   for(let i = 1; i < scores.length; i++) {
//       if (scores[i] > maxScore) {
//           maxScore = scores[i];
//           max++;
//           // continue;
//       }
//       if (scores[i] < minScore) {
//           minScore = scores[i]
//           min++;
//           // continue;
//       }
//   }
//   return [max, min];

// }



// function processData(input) {
// //  input = prompt('enter word');
// let splitWord=input.split(';')
// let op = splitWord[0]
// let wordType = splitWord[1]
// let rmSpace = input.split(' ')
// let cap = (rmSpace[1][0]);
// let word = input.split(cap)[1]
// console.log(word)
// console.log(cap)
// console.log(splitWord)
// console.log(rmSpace)
// function camelCase(){
//   let capWord = rmSpace[0];
//   console.log(capWord)
//    let newWord = cap.toUpperCase()
//    let wholeWord = newWord + word
//    let varName;
//    console.log(capWord + wholeWord)
// }
// if (op == 'C' && wordType == 'V') camelCase()


// } 


function processData(input) {
//  input = prompt('enter word');
splitWord = input.split(';');
console.log(splitWord);
let capLetter;
let twoWords;
if (splitWord[0] == 'S' && splitWord[1] == 'M'){
trimmedWord = input.replace(/([S;M;()])/g, '');
trimmedWord = trimmedWord.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
console.log(trimmedWord)
    // console.log(trimmedWord.charAt(trimmedWord.indexOf(letter = letter.toUpperCase())));
    // capLetter = trimmedWord.charAt(trimmedWord.lastIndexOf(letter = letter.toUpperCase())).toLowerCase();
}
if (splitWord[0] == 'C' && splitWord[1] == 'V'){
trimmedWord = input.replace(/([A-Z]) ([a-z])/g, str=> str.toLowerCase())
}
}
processData('S;M;plasticCup()')

// S;M;plasticCup()

// C;V;mobile phone

// C;C;coffee machine

// S;C;LargeSoftwareBook

// C;M;white sheet of paper

// S;V;pictureFrame