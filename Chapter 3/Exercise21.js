// **3.21 (Science: day of the week) Zeller’s congruence is an algorithm developed by 
// Christian Zeller to calculate the day of the week. The formula is
// h = ¢q + 26(m + 1)
// 10
// where
// + k + k
// 4 + j
// 4 + 5j≤ %7
//  ■ h is the day of the week (0: Saturday, 1: Sunday, 2: Monday, 3: Tuesday, 4: 
// Wednesday, 5: Thursday, 6: Friday).
//  ■ q is the day of the month.
//  ■ m is the month (3: March, 4: April, …, 12: December). January and February 
// are counted as months 13 and 14 of the previous year.
//  ■ j is the century (i.e., year
// 100 ).
//  ■ k is the year of the century (i.e., year % 100).
// Note that the division in the formula performs an integer division. Write a pro
// gram that prompts the user to enter a year, month, and day of the month, and 
// displays the name of the day of the week. Here are some sample runs:
// Enter year: (e.g., 2012): 2015
// Enter month: 1-12: 1
// Enter the day of the month: 1-31: 25
// Day of the week is Sunday 
// Enter year: (e.g., 2012): 2012
// Enter month: 1-12: 5
// Enter the day of the month: 1-31: 12
// Day of the week is Saturday 
// (Hint: January and February are counted as 13 and 14 in the formula, so you need 
// to convert the user input 1 to 13 and 2 to 14 for the month and change the year to 
// the previous year.)



let year = Number(prompt("Enter year (e.g., 2012):"));
let month = Number(prompt("Enter month (1-12):"));
let day = Number(prompt("Enter the day of the month (1-31):"));

if (month === 1 || month === 2) {
    month += 12;
    year -= 1;
}

let q = day;
let m = month;
let k = year % 100;
let j = Math.floor(year / 100);

let h = (q + Math.floor((26 * (m + 1)) / 10) 
    + k + Math.floor(k / 4) 
    + Math.floor(j / 4) 
    + (5 * j)) % 7;

if(h==0){
    alert('Day of th week is saturday')
}else if(h==1){
    alert('Day of th week is sunday')
}else if(h==2){
    alert('Day of th week is monday')
}else if(h==3){
    alert('Day of th week is tuesday')
}else if(h==4){
    alert('Day of th week is wednesday')
}else if(h==5){
    alert('Day of th week is thursday')
}else (
    alert('Day of th week is friday')
)