// **5.28 (Display the first days of each month) Write a program that prompts the user to 
// enter the year and first day of the year, and displays the first day of each month 
// in the year. For example, if the user entered the year 2013, and 2 for Tuesday, 
// January 1, 2013, your program should display the following output:
// January 1, 2013 is Tuesday
// ...
// December 1, 2013 is Sunday


let year = Number(prompt('Enter the year'))
let day = Number(prompt('What day of the week is January 1, '+year+' ?\n1 for monday, 2 for tuesday....'))

let output = ''
let week = ''


for (let i = 1 ; i <= 12 ; i++ ){

    if (i == 1){
        month = 'January';
    }
    else if (i == 2){
        month = 'February';
        day = (day + 3);
        if(day > 7){
            day = day % 7
        } 
    }
    else if (i == 3){
        month = 'March';
        if( year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ){
            day = (day + 1);
            if(day > 7){
                day = day % 7
            } 
        }
    }
    else if (i == 4){
        month = 'April';
        day = (day + 3);
        if(day > 7){
            day = day % 7
        } 
    }
    else if (i == 5){
        month = 'May';
        day = (day + 2);
        if(day > 7){
            day = day % 7
        } 
    }
    else if (i == 6){
        month = 'June';
        day = (day + 3);
        if(day > 7){
            day = day % 7
        } 
    }
    else if (i == 7){
        month = 'July';
        day = (day + 2);
        if(day > 7){
            day = day % 7
        } 
    }
    else if (i == 8){
        month = 'August';
        day = (day + 3);
        if(day > 7){
            day = day % 7
        } 
    }
    else if (i == 9){
        month = 'September';
        day = (day + 3);
        if(day > 7){
            day = day % 7
        } 
    }
    else if (i == 10){
        month = 'October';
        day = (day + 2);
        if(day > 7){
            day = day % 7
        } 
    }
    else if (i == 11){
        month = 'November';
        day = (day + 3);
        if(day > 7){
            day = day % 7
        } 
    }
    else if (i == 12){
        month = 'December';
        day = (day + 2);
        if(day > 7){
            day = day % 7
        } 
    }
    
    if (day == 1){
        week = 'Monday'
    }
    else if (day == 2){
        week = 'Tuesday'
    }
    else if (day == 3){
        week = 'Wednesday'
    }
    else if (day == 4){
        week = 'Thursday'
    }
    else if (day == 5){
        week = 'Friday'
    }
    else if (day == 6){
        week = 'Saturday'
    }
    else if (day == 7){
        week = 'Sunday'
    }

    output += month + ' 1, ' + year + ' is '+ week + '\n';
}

console.log(output);