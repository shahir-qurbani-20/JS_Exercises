// **5.29 (Display calendars) Write a program that prompts the user to enter the year and 
// first day of the year and displays the calendar table for the year on the console. For 
// example, if the user entered the year 2013, and 2 for Tuesday, January 1, 2013, 
// your program should display the calendar for each month in the year, as follows:
// January 2013
// Sun
// 6
// 13
// 20
// 27
// Mon Tue Wed Thu Fri Sat
// 1 2 3 4 5
// 7
// 14
// 21
// 28
// 8
// 15
// 22
// 29
// 9
// 16
// 23
// 30
// 10
// 17
// 24
// 31
// 11
// 18
// 25
// 12
// 19
// 26


var year = Number(prompt("Enter year"));

for (let month = 0; month < 12; month++) {

    let monthName = "";
    if (month == 0) monthName = "January";
    else if (month == 1) monthName = "February";
    else if (month == 2) monthName = "March";
    else if (month == 3) monthName = "April";
    else if (month == 4) monthName = "May";
    else if (month == 5) monthName = "June";
    else if (month == 6) monthName = "July";
    else if (month == 7) monthName = "August";
    else if (month == 8) monthName = "September";
    else if (month == 9) monthName = "October";
    else if (month == 10) monthName = "November";
    else monthName = "December";


    let numberOfDays = 31;
    if (month == 3 || month == 5 || month == 8 || month == 10) numberOfDays = 30;
    else if (month == 1) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) numberOfDays = 29;
        else numberOfDays = 28;
    }

    console.log("\n        " + monthName + " " + year+
        '\n___________________________');
    console.log("Sun Mon Tue Wed Thu Fri Sat");

    let weak = new Date(year, month, 1).getDay();
    let line = "";


    for (let i = 0; i < weak; i++) {
        line += "    ";
    }


    for (let day = 1; day <= numberOfDays; day++) {

        if (day < 10) {
            line += " " + day + "  ";
        } else {
            line += day + "  ";
        }

        weak++;

        if (weak > 6) {
            console.log(line);
            line = "";
            weak = 0;
        }
    }

    if (line !== "") {
        console.log(line);
    }
}