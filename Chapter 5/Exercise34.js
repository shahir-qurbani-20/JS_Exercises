// ***5.34 (Game: scissor, rock, paper) Programming Exercise  3.17 gives a program that 
// plays the scissor-rock-paper game. Revise the program to let the user continu
// ously play until either the user or the computer wins more than two times than its 
// opponent.



let com = 0;
let you = 0;

for(let i = 1 ; Math.abs(com - you) < 2 ; i++){
    
    let usernum = prompt('scissor (0), rock (1), paper (2):')
    let computer = Math.floor(Math.random()*3)

    if(usernum==0 && computer==1){
        com++
        alert('You : '+you+"   Computer : "+com+'\nThe computer is rock.You are scissor.\nYou lost')
}else if(usernum==0 && computer==2){
    you++
    alert('You : '+you+"   Computer : "+com+'\nThe computer is paper.You are scissor.\nYou won')
}else if(usernum==2 && computer==1){
    you++
    alert('You : '+you+"   Computer : "+com+'\nThe computer is rock.You are paper.\nYou won')
}else if(usernum==1 && computer==2){
    com++
    alert('You : '+you+"   Computer : "+com+'\nThe computer is paper.You are rock.\nYou lost')
}else if(usernum==1 && computer==0){
    you++
    alert('You : '+you+"   Computer : "+com+'\nThe computer is scissor.You are rock.\nYou won')
}else if(usernum==2 && computer==0){
    com++
    alert('You : '+you+"   Computer : "+com+'\nThe computer is scissor.You are paper.\nYou lost')
}else (
    alert('You : '+you+"   Computer : "+com+'You and the computer have the same answer.\nDraw')
)
}
if(you > com){
    alert('You win the match!\nYou : '+you+'  Computer : '+com)
}else{
    alert('You lose the match!\nYou : '+you+'  Computer : '+com)
}