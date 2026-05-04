// *4.17 (Days of a month) Write a program that prompts the user to enter a year and the 
// first three letters of a month name (with the first letter in uppercase) and displays 
// the number of days in the month. Here is a sample run:
// Enter a year: 2001
// Enter a month: Jan
// Jan 2001 has 31 days
// Enter a year: 2016
// Enter a month: Feb
// Jan 2016 has 29 days


let year = Number(prompt('Enter a year (2016, 2020, 2024...):'))
let month = prompt('Enter a month (Jan, Feb, Jun...) :')

let leaf = null

if( year < 0 ){
    alert('invalid input!')
}else if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0) ){
    leaf = 366
}else(
    leaf = 365
)

switch(month){
    case 'Jan':
        alert('Jan has 31 days.');
    break;
    case 'Feb':
        if (leaf==366){
            alert('Jan has 29 days.')
        }else(
            alert('Jan has 28 days.')
        );
    break;
    case 'Mar':
        alert('Jan has 31 days.');
    break;
    case 'Apr':
        alert('Jan has 30 days.');
    break;
    case 'May':
        alert('Jan has 31 days.');
    break;
    case 'Jun':
        alert('Jan has 30 days.');
    break;
    case 'Jul':
        alert('Jan has 31 days.');
    break;
    case 'Aug':
        alert('Jan has 31 days.');
    break;
    case 'Sep':
        alert('Jan has 30 days.');
    break;
    case 'Oct':
        alert('Jan has 31 days.');
    break;
    case 'Nov':
        alert('Jan has 30 days.');
    break;
    case 'Dec':
        alert('Jan has 31 days.');
    break;
    default:
        alert('invalid input!')
}