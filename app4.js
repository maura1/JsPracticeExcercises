/*TASK
Write a JS program to createe a new string adding "New!" in front of a given stirng.
If the given string begins with "New!" already then return the origional string*/



const addNew = (str)=> str.indexOf('New!') !== 0 ?  `New! ${str}`:str



console.log(addNew('New! Bonuses'))
console.log(addNew('rabbits!'))