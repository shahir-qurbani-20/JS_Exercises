// **6.25 (Convert milliseconds to hours, minutes, and seconds) Write a method that con
// verts milliseconds to hours, minutes, and seconds using the following header:
// public static String convertMillis(long millis)
// The method returns a string as hours:minutes:seconds. For example, 
// convertMillis(5500) returns a string 0:0:5, convertMillis(100000) returns 
// a string 0:1:40, and convertMillis(555550000) returns a string 154:19:10.



function convert(){
    let milliseconds = Number(prompt("Enter the value of milliseconds to convert:"))
    let hours = Math.floor(milliseconds / 3600000);
    let minutes = Math.floor((milliseconds % 3600000) / 60000);
    let seconds = Math.floor(((milliseconds % 3600000) % 60000) / 1000);
    let result = hours+':'+minutes+':'+seconds;

    console.log(result);
}
convert();