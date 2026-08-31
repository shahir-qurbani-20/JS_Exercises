// *5.42 (Financial application: find the sales amount) Rewrite Programming Exercise 
// 5.39 as follows:
//  ■ Use a for loop instead of a do-while loop.
//  ■ Let the user enter COMMISSION_SOUGHT instead of fixing it as a constant.



let goal = 25000;
let sales = 0;
let commission = 0;
let sought1 = prompt('Enter the rate for the first $5,000 in peecentage:')
let sought3 = prompt('Enter the rate for the rest in peecentage:')
let sought2 = prompt('Enter the rate for the second $5,000 in peecentage:')
if(/^\d{1,2}$/.test(sought1) && /^\d{1,2}$/.test(sought2) && /^\d{1,2}$/.test(sought3)){
    for(sales = 1 ; commission < goal ; sales++){
        
        if(sales <= 5000){
            commission = sales * sought1 / 100;
        }else if(sales <= 10000){
            commission = 5000 * sought1 / 100;
            commission += (sales - 5000) * sought2 / 100;
        }else{
            commission = 5000 * sought1 / 100;
            commission += 5000 * sought2 / 100;
            commission += (sales - 10000) * sought3 / 100;
        }
    }
    console.log('The minimum sales to make $30,000 is: $' + sales);
}else(alert('The rate must be in percentage 0 - 99'))