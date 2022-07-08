/*TASK

Write a JS program to replace every character in a given string with the characteer following it in the alphabet */

//String.fromCharCode
//charCodeAt

//First use the split() method to turn the string into an array
//Using the map() method for each character use the charCodeAt method to convert the character to a number and add one to it. This pushes it throught the alphabet by one.
//Then use the String.fromCharCode() method to convert the number to a string 
//Use the join()method to join the characters together



const replaceChars = (str) => str.split('')
                                 .map(char=> String.fromCharCode(char.charCodeAt(0)+1))
                                 .join('')

console.log(replaceChars('abcd'))   // returns 'bcde'


