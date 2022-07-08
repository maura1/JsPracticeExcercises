/* TASK

Write a JS program to get the current date.
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/



const dateFormatter = (date = new Date()) =>{
    const  days = date.getDay()+1
    const months  = date.getMonth()+1
    const years = date.getFullYear()

    return `${days}/${months}/${years}  or ${months}/${months}/${years} or
    ${days}-${months}-${years}  or ${months}-${months}-${years} `
}

console.log(dateFormatter())