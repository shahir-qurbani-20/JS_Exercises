// *3.13 (Financial application: compute taxes) Listing 3.5, ComputeTax.java, gives the 
// source code to compute taxes for single filers. Complete Listing 3.5 to compute 
// the taxes for all filing statuses.


let status = prompt(`0-single filer, 1-married jointly , 2-married separately, 3-head of household , Enter the filing status: `)
let income = prompt('Enter the taxable income:')

if(status == 0){
    if(income<=8350 && income > 0){
        let tax = income * 0.1
        alert('Tax is ' + tax)
    }else if(income<=33950 && income > 8350){
        let tax = 8350 * 0.1 + (income - 8350)*0.15
        alert('Tax is ' + tax)
    }else if(income<=82250 && income > 33950){
        let tax = 8350 * 0.1 + (33950 - 8350)* 0.15 + (income - 33950) * 0.25
        alert('Tax is ' + tax)
    }else if(income<=171550 && income > 82250){
        let tax = 8350 * 0.1 + (33950 - 8350) * 0.15 + (82250 - 33950) * 0.25 + (income - 82250) * 0.28
        alert('Tax is ' + tax)
    }else if(income<=372950 && income > 171550){
        let tax = 8350 * 0.1 + (33950 - 8350) * 0.15 + (82250 - 33950) * 0.25 + (171550 - 82250) * 0.28 + (income - 171550) * 0.33 
        alert('Tax is ' + tax)
    }else if(income > 372950){
        let tax = 8350 * 0.1 + (33950 - 8350) * 0.15 + (82250 - 33950) * 0.25 + (171550 - 82250) * 0.28 + (372950 - 171550) * 0.33 + (income - 372950) * 0.35
        alert('Tax is ' + tax)
    }else(
        alert(undefined)
    )
}else if(status == 1){
    if(income<=16700 && income > 0){
        let tax = income * 0.1
        alert('Tax is ' + tax)
    }else if(income<=67900 && income > 16700){
        let tax = 16700 * 0.1 + (income - 16700)*0.15
        alert('Tax is ' + tax)
    }else if(income<=137050 && income > 67900){
        let tax = 16700 * 0.1 + (67900 - 16700)* 0.15 + (income - 67900) * 0.25
        alert('Tax is ' + tax)
    }else if(income<=208850 && income > 137050){
        let tax = 16700 * 0.1 + (67900 - 16700) * 0.15 + (137050 - 67900) * 0.25 + (income - 137050) * 0.28
        alert('Tax is ' + tax)
    }else if(income<=372950 && income > 208850){
        let tax = 16700 * 0.1 + (67900 - 16700) * 0.15 + (137050 - 67900) * 0.25 + (208850 - 137050) * 0.28 + (income - 208850) * 0.33 
        alert('Tax is ' + tax)
    }else if(income > 372950){
        let tax = 16700 * 0.1 + (67900 - 16700) * 0.15 + (137050 - 67900) * 0.25 + (208850 - 137050) * 0.28 + (372950 - 208850) * 0.33 + (income - 372950) * 0.35
        alert('Tax is ' + tax)
    }else(
        alert(undefined)
    )
}else if(status == 2){
    if(income<=8350 && income > 0){
        let tax = income * 0.1
        alert('Tax is ' + tax)
    }else if(income<=33950 && income > 8350){
        let tax = 8350 * 0.1 + (income - 8350)*0.15
        alert('Tax is ' + tax)
    }else if(income<=68525 && income > 33950){
        let tax = 8350 * 0.1 + (33950 - 8350)* 0.15 + (income - 33950) * 0.25
        alert('Tax is ' + tax)
    }else if(income<=104425 && income > 68525){
        let tax = 8350 * 0.1 + (33950 - 8350) * 0.15 + (68525 - 33950) * 0.25 + (income - 68525) * 0.28
        alert('Tax is ' + tax)
    }else if(income<=186475 && income > 104425){
        let tax = 8350 * 0.1 + (33950 - 8350) * 0.15 + (68525 - 33950) * 0.25 + (104425 - 68525) * 0.28 + (income - 104425) * 0.33 
        alert('Tax is ' + tax)
    }else if(income > 186475){
        let tax = 8350 * 0.1 + (33950 - 8350) * 0.15 + (68525 - 33950) * 0.25 + (104425 - 68525) * 0.28 + (186475 - 104425) * 0.33 + (income - 186475) * 0.35
        alert('Tax is ' + tax)
    }else(
        alert(undefined)
    )
}else if(status == 3){
    if(income<=11950 && income > 0){
        let tax = income * 0.1
        alert('Tax is ' + tax)
    }else if(income<=45500 && income > 11950){
        let tax = 11950 * 0.1 + (income - 11950)*0.15
        alert('Tax is ' + tax)
    }else if(income<=117450 && income > 45500){
        let tax = 11950 * 0.1 + (45500 - 11950)* 0.15 + (income - 45500) * 0.25
        alert('Tax is ' + tax)
    }else if(income<=190200 && income > 117450){
        let tax = 11950 * 0.1 + (45500 - 11950) * 0.15 + (117450 - 45500) * 0.25 + (income - 117450) * 0.28
        alert('Tax is ' + tax)
    }else if(income<=372950 && income > 190200){
        let tax = 11950 * 0.1 + (45500 - 11950) * 0.15 + (117450 - 45500) * 0.25 + (190200 - 117450) * 0.28 + (income - 190200) * 0.33 
        alert('Tax is ' + tax)
    }else if(income > 372950){
        let tax = 11950 * 0.1 + (45500 - 11950) * 0.15 + (117450 - 45500) * 0.25 + (190200 - 117450) * 0.28 + (372950 - 190200) * 0.33 + (income - 372950) * 0.35
        alert('Tax is ' + tax)
    }else(
        alert(undefined)
    )
}else (
    alert(undefined)
)