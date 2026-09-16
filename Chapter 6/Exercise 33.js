// **6.33 (Current date and time) Invoking System.currentTimeMillis() returns the 
// elapsed time in milliseconds since midnight of January 1, 1970. Write a program 
// that displays the date and time. Here is a sample run:
// Current date and time is May 16, 2012 10:34:23


function current (){
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    switch (month){
        case 1:
            month = 'January';
            break;
        case 2:
            month = 'February';
            break;
        case 3:
            month = 'March';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'May';
            break;
        case 6:
            month = 'June';
            break;
        case 7:
            month = 'July';
            break;
        case 8:
            month = 'August';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'October';
            break;
        case 11:
            month = 'November';
            break;
        default:
            month = 'December';
    }
    console.log(`Current date and time is ${month} ${day}, ${year} ${hour}:${minute}:${second}`)
}
current();