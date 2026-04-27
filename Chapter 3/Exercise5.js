// *3.5 (Find future dates) Write a program that prompts the user to enter an integer for 
// today’s day of the week (Sunday is 0, Monday is 1, …, and Saturday is 6). Also 
// prompt the user to enter the number of days after today for a future day and dis
// play the future day of the week. Here is a sample run:
// Enter today's day: 1
// Enter the number of days elapsed since today: 3
// Today is Monday and the future day is Thursday 
// Enter today's day: 0
// Enter the number of days elapsed since today: 31
// Today is Sunday and the future day is Wednesday



let today = Number(prompt("enter today's number (0-6):")) 
let elapsed = Number(prompt("enter the number of days elapsed since today :")) 

let futureDay = (today+elapsed) % 7

if(today==0){
    alert('today is sunday \nelapsed day: '+elapsed )
}else if(today==1){
    alert('today is monday \nelapsed day: '+elapsed )
}else if(today==1){
    alert('today is tuesday \nelapsed day: '+elapsed )
}else if(today==1){
    alert('today is wednesday \nelapsed day: '+elapsed )
}else if(today==1){
    alert('today is thurseday \nelapsed day: '+elapsed )
}else if(today==1){
    alert('today is friday \nelapsed day: '+elapsed )
}else if(today==1){
    alert('today is saturday \nelapsed day: '+elapsed )
}else(
    alert(undefined)
)