// 6.35 (Geometry: area of a pentagon) The area of a pentagon can be computed using the 
// following formula:
// Area = 5 * s2
// 4 * tan¢p
// 5 ≤
// Write a method that returns the area of a pentagon using the following header:
// public static double area(double side)
// Write a main method that prompts the user to enter the side of a pentagon and 
// displays its area. Here is a sample run:
// Enter the side: 5.5
// The area of the pentagon is 52.04444136781625



function pentegon(){
    let s = Number(prompt('Enter the side of the pentagon:'))

    let area = (5 * (s ** 2)) / (4 * Math.tan(Math.PI / 5));
    
    console.log('The area of the pentagon is '+area);
}
pentegon();