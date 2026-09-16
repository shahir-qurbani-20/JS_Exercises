// *6.16 (Number of days in a year) Write a method that returns the number of days in a 
// year using the following header:
// public static int numberOfDaysInAYear(int year)
// Write a test program that displays the number of days in year from 2000 to 2020.


function days(n) {
    let year = 0;
    let count = 0;
    let text = '2000 ';
    let result = '';
    for (let i = 2000; i <= n; i++) {
        if (i%4==0 && i%100!=0 || i%400==0) {
            year = 366;
            if (i>2000) {
                text += ', '+ i +' ';
            }
        }else{
            year = 365;
        }
        count += i;
    }
    result = 'Sum of all days is '+count+'\n'+text+' are leap years.'
    console.log(result);
}
days(2020);