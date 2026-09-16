// 6.39 (Geometry: point position) Programming Exercise 3.32 shows how to test whether 
// a point is on the left side of a directed line, on the right, or on the same line. Write
// the methods with the following headers:
// /** Return true if point (x2, y2) is on the left side of the 
//  *  directed line from (x0, y0) to (x1, y1) */ 
// public static boolean leftOfTheLine(double x0, double y0, 
// double x1, double y1, double x2, double y2)
// /** Return true if point (x2, y2) is on the same
//  *  line from (x0, y0) to (x1, y1) */ 
// public static boolean onTheSameLine(double x0, double y0, 
// double x1, double y1, double x2, double y2)
// /** Return true if point (x2, y2) is on the
//  *  line segment from (x0, y0) to (x1, y1) */ 
// public static boolean onTheLineSegment(double x0, double y0, 
// double x1, double y1, double x2, double y2)
// Write a program that prompts the user to enter the three points for p0, p1, and p2
// and displays whether p2 is on the left of the line from p0 to p1, right, the same 
// line, or on the line segment. Here are some sample runs:
// Enter three points for p0, p1, and p2: 1 1 2 2 1.5 1.5
// (1.5, 1.5) is on the line segment from (1.0, 1.0) to (2.0, 2.0)
// Enter three points for p0, p1, and p2: 1 1 2 2 3 3
// (3.0, 3.0) is on the same line from (1.0, 1.0) to (2.0, 2.0)    
// Enter three points for p0, p1, and p2: 1 1 2 2 1 1.5
// (1.0, 1.5) is on the left side of the line 
//   from (1.0, 1.0) to (2.0, 2.0)


function point (){
    let x0 = Number(prompt('(x0, y0) & (x1, y1) = line\n(x2, y2) = point\n\nEnter x0:'));
    let y0 = Number(prompt('(x0, y0) & (x1, y1) = line\n(x2, y2) = point\n\nEnter y0:'));
    let x1 = Number(prompt('(x0, y0) & (x1, y1) = line\n(x2, y2) = point\n\nEnter x1:'));
    let y1 = Number(prompt('(x0, y0) & (x1, y1) = line\n(x2, y2) = point\n\nEnter y1:'));
    let x2 = Number(prompt('(x0, y0) & (x1, y1) = line\n(x2, y2) = point\n\nEnter x2:'));
    let y2 = Number(prompt('(x0, y0) & (x1, y1) = line\n(x2, y2) = point\n\nEnter y2:'));

    let position = ((x1 - x0)*(y2 - y0) - (y1 - y0)*(x2 - x0));
    let distance0 = Math.pow(Math.pow(x1-x0, 2)+Math.pow(y1-y0, 2), 0.5);
    let distance1 = Math.pow(Math.pow(x2-x1, 2)+Math.pow(y2-y1, 2), 0.5);
    let distance2 = Math.pow(Math.pow(x2-x0, 2)+Math.pow(y2-y0, 2), 0.5);

    if (position > 0) {
        console.log('('+x2+', '+y2+') is on the left side of line from ('+x0+', '+y0+') to ('+x1+', '+y1+')');
    }else if (position < 0) {
        console.log('('+x2+', '+y2+') is on the right side of line from ('+x0+', '+y0+') to ('+x1+', '+y1+')');
    }else{
        if (Math.abs(distance1 - distance2) == distance0) {
            console.log('('+x2+', '+y2+') is on the same line from ('+x0+', '+y0+') to ('+x1+', '+y1+')');
        }else{
            console.log('('+x2+', '+y2+') is on the line segment from ('+x0+', '+y0+') to ('+x1+', '+y1+')');
        }
    }
}
point();