// // This function checks the language of a letter

// function LetterLanguage(letter){
//     if(/[a-zA-Z]/.test(letter)){return "Latin";}
//     if(/[а-яА-ЯёЁ]/.test(letter)){return "Cyrillic";}
//     return "unknown";
// }
// const voorbeld = "asdфыва ";
// for (let i = 0; i < voorbeld.length; i++) {
//     console.log(LetterLanguage(voorbeld[i])); // "unknown"
// }


// This function randomly stirs elements of an array
// function RandomStir(array){
//     const newArray = [];
//     const arrayLength = array.length;
//     for (let i = 0; i < arrayLength; i++) {
//         const randomIndex = Math.floor(Math.random() * arrayLength);
//         const temp = array[i];
//         array[i] = array[randomIndex];
//         array[randomIndex] = temp;
//         newArray.push(array[i]);
//     }
//     return newArray;
// }
// console.log(RandomStir([1, 2, 3, 4, 5])); // [3, 1, 5, 2, 4] (example output, actual output will vary)

// This function returns array of number divers

// function NumberDividers(number) {
//     let arreyOfDivers = []
//     for (i=1; i<=number; i++) {
//         if(number % i == 0) {
//             arreyOfDivers.push(i)
//         }
//     }
//     return alert(arreyOfDivers);
// }
// NumberDividers(1)

// magic square

// const matrix = [
//     [2, 7, 6],
//     [9, 5, 1],
//     [4, 3, 8]
// ];
// const matrix2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
//
//
// const matrix3 = [
//     [16, 2, 3, 13],
//     [5, 11, 10, 8],
//     [9, 7, 6, 12],
//     [4, 14, 15, 1]
// ];
// const matrix4 = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8]
// ];
//
// const matrix5 = [
//     [1, 2],
//     [3, 4]
// ];
//
//
//
//
// function isMagicSquare(matr) {
//     const magicNum = matr[0].reduce((a, b) => a + b, 0);
//
//     for (let i = 0; i < matr.length; i++) {
//         const rowSum = matr[i].reduce((sum, num) => sum + num, 0);
//         if (rowSum !== magicNum) {
//             return false;
//         }
//     }
//     for (let j = 0; j < matr[0].length; j++) {
//         let colSum = 0;
//         for (let i = 0; i < matr.length; i++) {
//             colSum += matr[i][j];
//         }
//         if (colSum !== magicNum) {
//             return false;
//         }
//     }
//
//     let mainDiagonalSum = 0;
//     for (let i = 0; i < matr.length; i++) {
//         mainDiagonalSum += matr[i][i];
//     }
//     if (mainDiagonalSum !== magicNum) {
//         return false;
//     }
//
//     let secondaryDiagonalSum = 0;
//     for (let i = 0; i < matr.length; i++) {
//         secondaryDiagonalSum += matr[i][matr.length - 1 - i];
//     }
//     if (secondaryDiagonalSum !== magicNum) {
//         return false;
//     }
//
//     return true;
// }
//
// console.log(isMagicSquare(matrix));
// console.log(isMagicSquare(matrix2));
// console.log(isMagicSquare(matrix3));
// console.log(isMagicSquare(matrix4));
// console.log(isMagicSquare(matrix5));
//


