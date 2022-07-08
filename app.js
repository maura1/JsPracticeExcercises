/*Write a JS program to check tow numbers and return true is one of the number
is 100 or if the sum of the two numbers is100 */

const isEqual = (num1, num2)=> num1 === 100 || num1 + num2 ===100 ? true:false


console.log(isEqual(10, 20))