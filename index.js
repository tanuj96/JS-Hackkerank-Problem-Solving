// //Simple Array Sum
// //  -->  With Simple For Loop
// function simpleArraySum(ar) {
//     var sum = 0;
//     for(let i=0;i<=ar.length-1;i++){
//         sum += ar[i];
//     }
//     return sum
// }

// //  --> With Javascript Reduce
// function simpleArraySum(ar) {
//   return ar.reduce((a, b) => a + b)
// }

// simpleArraySum([1, 2, 3, 4, 10, 11])

// --------------------------------------------------------------

// // Compare the Triplets
// function compareTriplets(a, b) {
//     var result = [0,0];
//     for(var i=0;i<a.length;i++){
//         if(a[i]>b[i]){
//             result[0]++;
//         }
//         else if(a[i]<b[i]){
//             result[1]++;
//         }
//         else{
//             continue;
//         }
//     }
//     return result;
// }

// compareTriplets([17,28,30],[99,16,8]);

// ---------------------------------------------------------------

// // A Very Big Sum

// function aVeryBigSum(ar) {
//     return ar.reduce((a,b)=>a+b);
// }

// aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]);

// ------------------------------------------------------------------

// // Diagonal Difference

// const diagonalSum = (arr)=>{
//   var sum = 0;
//     for(let i=0;i<arr.length;i++){
//       sum += arr[i][i];
//     }
//     return sum;
// }

// function diagonalDifference(arr) {
//     // Write your code here
//     var rSum = diagonalSum(arr)
//     arr.reverse();
//     var lSum = diagonalSum(arr);
//     return Math.abs(rSum-lSum);
// }


// diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]);

//-------------------------------------------------------------------

// // Plus Minus

// function plusMinus(arr) {
//     let positiveVal = 0;
//     let negetiveVal = 0;
//     let zeroVal = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             positiveVal++;
//         }
//         else if (arr[i] < 0) {
//             negetiveVal++;
//         }
//         else {
//             zeroVal++;
//         }
//     }
//     console.log(positiveVal / arr.length)
//     console.log(negetiveVal / arr.length)
//     console.log(zeroVal / arr.length)
// }

// plusMinus([-4, 3, -9, 0, 4, 1]);

// ----------------------------------------------------------------

// // Staircase

// function staircase(n) {
//   for(let i=1;i<=n;i++){
//       for(let j=1;j<=n-i;j++){
//         process.stdout.write(' ')
//       }
//       for(let k=1;k<=i;k++){
//         process.stdout.write('#')
//       }
//       console.log();
//   }
// }

// staircase(10);

// -----------------------------------------------------------------

// // Min Max Sum

// function miniMaxSum(arr) {
//     var maxSum = 0;
//     var minSum = 0;
//   (arr.sort((a,b)=>{return a-b}));
//   for(let i=0;i<=3;i++){
//       minSum += arr[i]
//   }
//     arr.reverse();
//     for(let i=0;i<=3;i++){
//       maxSum += arr[i]
//   }
//   console.log(`${minSum} ${maxSum}`)
// }

// miniMaxSum([1,2,3,4,5])

// ----------------------------------------------------------------

// // Birthday Candles

// function birthdayCakeCandles(candles) {
//     // Write your code here
//     let count = 0;
//     let max;
//     candles.sort((a,b)=>b-a);
//     for(let i=0;i<=candles.length;i++){
//         if(count == 0){
//             max = candles[i];
//             count++;
//         }
//         else{
//             if(candles[i]==max){
//                 count++;
//             }
//             else{
//                 return count;
//             }
//         }
//     }
// }

// birthdayCakeCandles([3,2,1,3]);

// -----------------------------------------------------------------

// // Time Conversion

// function timeConversion(s) {
//     const arr = s.slice(0, 8).split(':');
//     arr[0] = (s.indexOf('PM') > -1) ?
//         (arr[0] == 12) ? arr[0] = '12' : Number(arr[0]) + 12 :
//         (arr[0] == 12) ? '00' : arr[0];
//     return (arr.join(':'));
// }

// timeConversion("07:05:45PM");

// -----------------------------------------------------------------

// // Grading Students

// function gradingStudents(grades) {
//     // Write your code here]
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] >= 38) {
//             for (let j = grades[i] + 1; j <= grades[i] + 4; j++) {
//                 if (j % 5 === 0 && ((j - grades[i]) < 3)) {
//                     grades[i] = j;
//                 }
//             }
//         }
//     }
//     return grades;
// }

// gradingStudents([73,67,38,33]);

//-------------------------------------------------------------------

// // Apple and Oranges

// const originDistance = (tPoint, tree, s, t) => {
//     let count = 0;
//     let totalDistance = tree.map((t) => t + tPoint);
//     totalDistance.map((distance) => {
//         if (distance >= s && distance <= t) {
//             count++
//         }
//     })
//     return count;
// }

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     let apCount = originDistance(a,apples,s,t);
//     let orCount = originDistance(b,oranges,s,t);
//     console.log(apCount);
//     console.log(orCount)
// }

// countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);

// -----------------------------------------------------------------

// // Between Two Sets

// function getTotalX(a, b) {
//    var count = 0;
//    for(let i=1;i<=10;i++){

//    }
// }

// getTotalX([2,4],[16,32,96]);

// -----------------------------------------------------------------

// // Breaking the Records

// function breakingRecords(scores) {
//     var scoreMax = scores[0];
//     var scoreMin = scores[0];
//     var max = 0;
//     var min = 0;
//     for(let i=0;i<scores.length;i++){
//         if(scores[i]>scoreMax){
//             max++;
//             scoreMax = scores[i];
//         }
//         else if(scores[i]<scoreMin){
//             min++;
//             scoreMin = scores[i];
//         }
//     }
//     return [max,min];
// }

// breakingRecords([10,5,20,20,4,5,2,25,1]);

// -----------------------------------------------------------------

// // Subarray Division

// function birthday(s, d, m) {
//     var count = 0;
//     for(let i=0;i<s.length;i++){
//         let arr = s.slice(i,i+m);
//         if((arr.reduce((a,b)=>a+b))==d){
//             count++;
//         }
//     }
//     return count;
// }

// birthday([1,2,1,3,2],3,2);

// -----------------------------------------------------------------

// // Migratory Birds

// function migratoryBirds(arr) {
//   var count = [];
//   arr.sort((a,b)=>a-b)
//   arr.map((item)=>{
//     for(let i=item+1;i<arr.length-1;i++){
//       if(item == i){
//         count++;
//       }
//     }
//     count.push(count);
//   })
//   console.log(count)
// }

// migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]);

// ----------------------------------------------------------------

// // function pageCount(n, p) {
//     let d = n-p;
//     if(d<p){
//         if(n==p){
//             return 0;
//         }
//         else{
//             if(n%2==0){
//                 return Math.floor(1+(d-1)/2);
//             }
//             else{
//                 return Math.floor(d/2);
//             }
//         }
//     }
//     else{
//         return Math.floor(p/2);
//     }
// }

// pageCount(6,2);

// -----------------------------------------------------------------

// // Counting Valleys

// function countingValleys(steps, path) {
//   let arr = path.split('')
//   let ground = 0;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 'D') {
//       ground--;
//     }
//     else if (arr[i] == 'U') {
//       ground++;
//       if (i > 0 && ground == 0) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// countingValleys(8, "UDDDUDUU")

// ------------------------------------------------------------------

// // Electronics Shop

// function getMoneySpent(keyboards, drives, b) {
//       keyboards.sort((a,b)=>b-a);
//       drives.sort((a,b)=>b-a);
//       let arr = [];
//       for(let i=0;i<keyboards.length;i++){
//         for(let j=0;j<drives.length;j++){
//           if((keyboards[i]+drives[j])<=b){
//             arr.push(keyboards[i]+drives[j]);
//           }
//         }
//       }
//       if(arr.length>0){
//         return Math.max(...arr);
//       }
//       else if(arr.length==0){
//         return -1;
//       }
// }

// getMoneySpent([3, 1], [5, 2, 8], 10)

// ------------------------------------------------------------------

// // Forming a Magic Square

// function formingMagicSquare(s) {


// }

// formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]);

// ------------------------------------------------------------------

// // Utopian tree

// function utopianTree(n) {
//     let tree = 1;
//     for(let i=1;i<=n;i++){
//         if(i%2 !== 0){
//             tree *= 2;
//         }
//         else if(i%2 == 0){
//             tree++;
//         }
//     }
//     return tree;
// }

// utopianTree(4);

// ------------------------------------------------------------------

// // Find Digits

// function findDigits(n) {
//   var num = n.toString();
//   var count = 0;
//   const arr = num.split('');
//   for(let i=0;i<arr.length;i++){
//     if((n%(parseInt(arr[i])))==0){
//       count++;
//     }
//   }
//   return count;
// }

// findDigits(124);

// ------------------------------------------------------------------

// // Viral Advertising

// function viralAdvertising(n) {
//   let commulative = 2;
//   let like = 2;
//   let shared = 5;
//   for(let i=2;i<=n;i++){
//     shared = like*3;
//     like = Math.floor(shared/2);
//     commulative += like;
//   }
//   return commulative;
// }

// viralAdvertising(3);

// ------------------------------------------------------------------



