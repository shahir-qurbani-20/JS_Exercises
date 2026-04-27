// 3.7 (Financial application: monetary units) Modify Listing 2.10, ComputeChange
// .java, to display the nonzero denominations only, using singular words for single 
// units such as 1 dollar and 1 penny, and plural words for more than one unit such 
// as 2 dollars and 3 pennies.



let amount = Number(prompt('Enter an amount, for example, 11.56:'))

var dolors = Math.floor(amount);
(dolors == 1 || dolors == 0 )? console.log(dolors + " dolor "): console.log(dolors + " dolors");
var re_dolor = (amount * 100 ) % 100

var squarters = Math.floor( re_dolor / 25);
(squarters == 1 || squarters == 0)? console.log(squarters + " Squarter"): console.log(squarters + " Squarters");
var re_squarters = re_dolor % 25

var dimes = Math.floor( re_squarters / 10 );
(dimes == 1 || dimes == 0)? console.log(dimes + " dime"): console.log(dimes + " dimes");
var re_dimes = re_squarters % 10

var nickels = Math.floor(re_dimes / 5);
(nickels == 1 || nickels == 0)? console.log(nickels + " nickel"): console.log(nickels + " nickels");
var re_nickels = re_dimes % 5

var pennies = Math.floor(re_nickels);
(pennies == 1 || pennies == 0)? console.log(pennies + " penny"): console.log(pennies + " pennies");