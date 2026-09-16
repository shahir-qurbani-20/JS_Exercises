//  (Conversions between Celsius and Fahrenheit) Write a class that contains the fol
// lowing two methods:
// /** Convert from Celsius to Fahrenheit */
// public static double celsiusToFahrenheit(double celsius)
// /** Convert from Fahrenheit to Celsius */
// public static double fahrenheitToCelsius(double fahrenheit)
// The formula for the conversion is:
// fahrenheit = (9.0 / 5) * celsius + 32
// celsius = (5.0 / 9) * (fahrenheit – 32)
// Write a test program that invokes these methods to display the following tables:
// Celsius Fahrenheit | Fahrenheit Celsius
// 40.0 104.0 | 120.0 48.89
// 39.0 102.2 | 110.0 43.33
// ...
// 32.0 89.6 | 40.0 4.44
// 31.0 87.8 | 30.0-1.11


let celsius = 0;
let fahrenheit = 0;
let x = '';
let y = '';
let cel = 0;
let fah = 0;
let chart = 'Celsius      Fahrenheit      |      Fahrenheit      Celsius\n___________________________________________________________\n\n';

function convert(c=40,f=120){
    for(let i = 1; i <= 10; i++){
        for (let i = c; i > 30 ; i--) {
            fahrenheit = (9/5*i+32).toFixed(1);
            cel = c.toFixed(1)
            c--;
            break;
        }
        for (let i = f; i >= 30 ; i -= 10) {
            celsius = (5/9*(i-32)).toFixed(2);
            fah = f.toFixed(1)
            f -= 10;
            break;
        }
        x = String(fahrenheit);
        y = String(fah);
        if (x.length==4 && y.length==4) {
            chart += cel+"         "+fahrenheit+'            |      '+fah+'            '+celsius+'\n';
        }else if (x.length == 4) {
            chart += cel+"         "+fahrenheit+'            |      '+fah+'           '+celsius+'\n';
        }else if (y.length == 4) {
            chart += cel+"         "+fahrenheit+'           |      '+fah+'            '+celsius+'\n';
        }else{
            chart += cel+"         "+fahrenheit+'           |      '+fah+'           '+celsius+'\n';
        }
    }
    console.log(chart);
}
convert()