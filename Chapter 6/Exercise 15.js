// *6.15 (Financial application: print a tax table) Listing 3.5 gives a program to compute 
// tax. Write a method for computing tax using the following header:
// public static double computeTax(int status, double taxableIncome)
// 238 Chapter 6 Methods
// Use this method to write a program that prints a tax table for taxable income from 
// $50,000 to $60,000 with intervals of $50 for all the following statuses:
// Taxable 
// Income
// 50000
// 50050
// ...
// 59950
// 60000
// Single
// 8688
// 8700
// 11175
// 11188
// Married Joint 
// or Qualifying 
// Widow(er)
// 6665
// 6673
// 8158
// 8165
// Married 
// Separate
// 8688
// 8700
// 11175
// 11188
// Head of 
// a House
// 7353
// 7365
// 9840
// 9853
// Hint: round the tax into integers using Math.round (i.e., Math
// .round(computeTax(status, taxableIncome)).



function TAX (n){
    let single = 0;
    let maried = 0;
    let separate = 0;
    let head = 0;
    let result = 'Taxable     single     Married Joint     Married      Head of'+
    '\nIncome                 or Qualifying     Separate     a House\n'+
    "                       Widow(er)                             \n_____________________________________________________________\n";

    for (let i = 50000; i <= n; i+=50) {
        single = (i - 33950)*0.25+4675;
        single = Math.round(single);
        maried = (i - 16700)*0.15+1670;
        maried = Math.round(maried);
        separate = (i - 33950)*0.25+4675;
        separate = Math.round(separate);
        head = (i - 45500)*0.25+6227.5;
        head = Math.round(head);
        if (single>=10000) {
            result += i+'       '+single+'      '+maried+'              '+separate+'        '+head+'\n';
        }else{
            result += i+'       '+single+'       '+maried+'              '+separate+'         '+head+'\n';
        }
    }
    console.log(result);
}
TAX(60000);