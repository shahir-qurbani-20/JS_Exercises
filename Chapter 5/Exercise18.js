// *5.18 (Display four patterns using loops) Use nested loops that display the following 
// patterns in four separate programs:
// Pattern A        Pattern B        Pattern C        Pattern D
// 1                1 2 3 4 5 6                1      1 2 3 4 5 6
// 1 2              1 2 3 4 5                2 1        1 2 3 4 5
// 1 2 3            1 2 3 4                3 2 1          1 2 3 4
// 1 2 3 4          1 2 3                4 3 2 1            1 2 3
// 1 2 3 4 5        1 2                5 4 3 2 1              1 2
// 1 2 3 4 5 6      1                6 5 4 3 2 1                1




let n = Number(prompt('enter the number of lines:'))

let line1 = ''
let line2 = ''
let line3 = ''
let line4 = ''

for (let i=1 ; i<=n ; i++){

    for (let s=1 ; s<=i ; s++){
        
        line1 += s +' '

    }

    line1 += '\n'
}

console.log("Pattren A\n\n"+line1);

for (let i=1 ; i<=n ; i++){
    
    for (let s=1 ; s<=n-i+1 ; s++){
        
        line2 += s +' '

    }

    line2 += '\n'
}

console.log("Pattren B\n\n"+line2);

for (let i=1 ; i<=n ; i++){

    for(let k=1 ; k<=(n-i)*2 ; k++){
        line3 += ' '
    }
        
    for (let s=i ; s>=1 ; s--){
                
        line3 += s +' '
        
    }
        
    line3 += '\n'
}
        
console.log("Pattren C\n\n"+line3);

for (let i=1 ; i<=n ; i++){
    
    for(let s=1 ; s<i ; s++){
        line4 += '  '
    }
    
    for(let j=1 ; j<=n-i+1 ; j++){
        
        line4 += j + ' '
        
    }

    line4 += '\n'

}

console.log("Pattren D\n\n"+line4);
