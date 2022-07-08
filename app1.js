//TASK

/*Write a JS function to get the extension of ta filename */

//SOLUTION
//Use the slice method return the string following the last '.'
const getFileExtension = str  => str.slice(str.lastIndexOf('.'))


//TEST
console.log(getFileExtension('index.html'))
console.log(getFileExtension('webpack.config.js'))