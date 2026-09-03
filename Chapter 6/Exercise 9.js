// 6.9 (Conversions between feet and meters) Write a class that contains the following 
// two methods:
// /** Convert from feet to meters */
// public static double footToMeter(double foot)
// /** Convert from meters to feet */
// public static double meterToFoot(double meter)
// The formula for the conversion is:
// meter = 0.305 * foot
// foot = 3.279 * meter
// Write a test program that invokes these methods to display the following tables:
// Feet Meters | Meters Feet
//  1.0 0.305 | 20.0 65.574
//  2.0 0.610 | 25.0 81.967
//  ...
//  9.0 2.745 | 60.0 196.721
// 10.0 3.050 | 65.0 213.115



let Feet = 0;
let Meters = 0;
let x = '';
let foot = 0;
let meter = 0;
let chart = 'Feet      Meters      |      Meters      Feet\n_______________________________________________\n\n';

function convert(c=1,f=20){
    for(let i = 1; i <= 10; i++){
        for (let i = c; i <= 10 ; i++) {
            Meters = (0.305*i).toFixed(1);
            foot = c.toFixed(1)
            c++;
            break;
        }
        for (let i = f; i <= 65 ; i += 5) {
            Feet = (3.279*i).toFixed(2);
            meter = f.toFixed(1)
            f += 5;
            break;
        }
        x = String(foot);
        if (x.length==4) {
            chart += foot+"      "+Meters+'         |      '+meter+'        '+Feet+'\n';
        }else{
            chart += foot+"       "+Meters+'         |      '+meter+'        '+Feet+'\n';
        }
    }
    console.log(chart);
}
convert()