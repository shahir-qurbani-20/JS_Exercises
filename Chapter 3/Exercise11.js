// Sections 3.8–3.16
// *3.11 (Find the number of days in a month) Write a program that prompts the user 
// to enter the month and year and displays the number of days in the month. For 
// example, if the user entered month 2 and year 2012, the program should display 
// that February 2012 had 29 days. If the user entered month 3 and year 2015, the 
// program should display that March 2015 had 31 days.



let month = Math.floor(Number(prompt('enter the number of month (1-12):')))
let year = Number(prompt('enter the year:'))

if (year > 12 || year < 0){
    alert(undefined)
}else if (month==1){
    alert('January '+ year +' had 31 days')
}else if (month==2 ){
    if((year%4 == 0 && year%100 !== 0) || year%400 == 0 ){
        alert(`February ${year} had 29 days`)
    }else(
        alert('February '+ year +' had 28 days')
    )
}else if (month==3){
    alert(`March ${year} had 31 days`)
}else if (month==4){
    alert(`April ${year} had 30 days`)
}else if (month==5){
    alert(`May ${year} had 31 days`)
}else if (month==6){
    alert(`June ${year} had 30 days`)
}else if (month==7){
    alert(`July ${year} had 31 days`)
}else if (month==8){
    alert(`August ${year} had 31 days`)
}else if (month==9){
    alert(`September ${year} had 30 days`)
}else if (month==10){
    alert(`October ${year} had 31 days`)
}else if (month==11){
    alert(`November ${year} had 30 days`)
}else (
    alert(`December ${year} had 31 days`)
)