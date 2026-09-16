// *6.36 (Geometry: area of a regular polygon) A regular polygon is an n-sided polygon 
// in which all sides are of the same length and all angles have the same degree (i.e., 
// the polygon is both equilateral and equiangular). The formula for computing the 
// area of a regular polygon is
// Area = n * s2
// 4 * tan¢p
// n ≤
// Write a method that returns the area of a regular polygon using the following header:
// public static double area(int n, double side)
// Write a main method that prompts the user to enter the number of sides and the 
// side of a regular polygon and displays its area. Here is a sample run:
// Enter the number of sides: 5
// Enter the side: 6.5
// The area of the polygon is 72.69017017488385



function polygon(){
    let n = Number(prompt('Enter the number of sides:'))
    let s = Number(prompt('Enter the side:'))

    let area = (n * (s ** 2)) / (4 * Math.tan(Math.PI / n));
    
    console.log('The area of the pentagon is '+area);
}
polygon();