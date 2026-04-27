// *3.17 (Game: scissor, rock, paper) Write a program that plays the popular scissor-rock
// paper game. (A scissor can cut a paper, a rock can knock a scissor, and a paper can 
// wrap a rock.) The program randomly generates a number 0,1, or 2 representing 
// scissor, rock, and paper. The program prompts the user to enter a number 0,1, or 
// 2 and displays a message indicating whether the user or the computer wins, loses, 
// or draws. Here are sample runs:
// scissor (0), rock (1), paper (2): 1
// The computer is scissor. You are rock. You won 
// scissor (0), rock (1), paper (2): 2
// The computer is paper. You are paper too. It is a draw 



let usernum = prompt('scissor (0), rock (1), paper (2):')
let computer = Math.floor(Math.random()*3)

if(usernum==0 && computer==1){
    alert('The computer is rock.You are scissor.\nYou lost')
}else if(usernum==0 && computer==2){
    alert('The computer is paper.You are scissor.\nYou won')
}else if(usernum==2 && computer==1){
    alert('The computer is rock.You are paper.\nYou won')
}else if(usernum==1 && computer==2){
    alert('The computer is paper.You are rock.\nYou lost')
}else if(usernum==1 && computer==0){
    alert('The computer is scissor.You are rock.\nYou won')
}else if(usernum==2 && computer==0){
    alert('The computer is scissor.You are paper.\nYou lost')
}else (
    alert('You and the computer have the same answer.\nDraw')
)