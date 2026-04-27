// **3.4 (Random month) Write a program that randomly generates an integer between 1 
// and 12 and displays the English month name January, February, …, December for 
// the number 1, 2, …, 12, accordingly.


let random = Math.floor(Math.random( )*12)
if ( random == 0 ){
    alert('January')
}else if( random == 1 ){
    alert('February')
}else if( random == 2 ){
    alert('March')
}else if( random == 3 ){
    alert('April')
}else if( random == 4 ){
    alert('May')
}else if( random == 5 ){
    alert('June')
}else if( random == 6 ){
    alert('July')
}else if( random == 7 ){
    alert('August')
}else if( random == 8 ){
    alert('September')
}else if( random == 9 ){
    alert('October')
}else if( random == 10 ){
    alert('November')
}else if( random == 11 ){
    alert('December')
}