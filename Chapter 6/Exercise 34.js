// **6.34 (Print calendar) Programming Exercise 3.21 uses Zeller’s congruence to calcu
// late the day of the h. Simplify Listing 6.12, PrintCalendar.java, using Zeller’s 
// algorithm to get the start day of the month.



function calender(){
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

        let m = month + 1;
        let y = year;
        if (m === 1 || m === 2) {
            m += 12;
            y -= 1;
        }
        let k = y % 100;
        let j = Math.floor(y / 100);

        let h = (1 + Math.floor((26 * (m + 1)) / 10) 
            + k - 1 + Math.floor(k / 4) 
            + Math.floor(j / 4) 
            + (5 * j)) % 7;

        let line = "";


        for (let i = 0; i < h; i++) {
            line += "    ";
        }


        for (let day = 1; day <= numberOfDays; day++) {

            if (day < 10) {
                line += " " + day + "  ";
            } else {
                line += day + "  ";
            }

            h++;

            if (h > 6) {
                console.log(line);
                line = "";
                h = 0;
            }
        }

        if (line !== "") {
            console.log(line);
        }
    }
}
calender();