// *3.20 (Science: wind-chill temperature) Programming Exercise 2.17 gives a formula 
// to compute the wind-chill temperature. The formula is valid for temperatures in 
// the range between −58ºF and 41ºF and wind speed greater than or equal to 2.
// Write a program that prompts the user to enter a temperature and a wind speed. 
// The program displays the wind-chill temperature if the input is valid; otherwise, 
// it displays a message indicating whether the temperature and/or wind speed is 
// invalid.




let temperature = Number(prompt('Enter the temperature in fahrenheit between -58F and 41F :'))
let wind = Number(prompt('Enter the wind speed (>=2) in miles per hour:'))
let windtemp = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(wind,0.16) + 0.4275 * temperature * Math.pow(wind,0.16)

if (temperature<-58 || temperature>41 && wind < 2){
    alert('The temperature and wind speed are invalid!')
}else if(temperature<-58 || temperature>41){
    alert('The temperature is invalid!')
}else if(wind < 2){
    alert('The wind speed is invalid!')
}else(
    alert('The wind chill index is ' + windtemp)
)