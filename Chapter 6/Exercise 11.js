// 6.11 (Financial application: compute commissions) Write a method that computes the 
// commission, using the scheme in Programming Exercise 5.39. The header of the 
// method is as follows:
// public static double computeCommission(double salesAmount)
// Write a test program that displays the following table:
// Sales Amount Commission
// 10000  900.0
// 15000 1500.0
// ...
// 95000 11100.0
// 100000 11700.0


let commission = 'Sales amount        commission\n______________________________\n\n'
let A = 0;

function calculate() {
    for (let sales = 10000; sales <= 100000; sales += 5000) {
        if (sales == 10000) {
            A = 5000 * 0.08;
            A += (sales - 5000) * 0.10;
        }
        else {
            A = 5000 * 0.08;
            A += 5000 * 0.10;
            A += (sales - 10000) * 0.12;
        }
        if (sales==10000) {
            commission += sales +'                '+A.toFixed(1)+'\n';
        }else if (sales==100000) {
            commission += sales +'              '+A.toFixed(1)+'\n';
        }else{
            commission += sales +'               '+A.toFixed(1)+'\n';
        }
    }
    console.log(commission);
}
calculate();