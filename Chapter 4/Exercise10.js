// *4.10 (Guess birthday) Rewrite Listing 4.3, GuessBirthday.java, to prompt the user to 
// enter the character Y for Yes and N for No rather than entering 1 for Yes and 0
// for No.


let day = 0

let set1 = Number(prompt('Is your birthday in Set1?\n  1    3    5    7\n  9   11  13  15\n 17  19  21  23\n 25  27  29  31\nEnter 0 for No and 1 for Yes:'));
(set1==1) ? day += 1 :day==day; 

let set2 = Number(prompt('Is your birthday in Set2?\n  2    3    6    7\n 10  11  14  15\n 18  19  22  23\n 26  27  30  31\nEnter 0 for No and 1 for Yes:'));
(set2==1) ? day +=2 :day==day; 

let set3 = Number(prompt('Is your birthday in Set3?\n 4    5    6    7\n 12  13  14  15\n 20  21  22  23\n 28  29  30  31\nEnter 0 for No and 1 for Yes:'));
(set3==1) ? day +=4 :day==day; 

let set4 = Number(prompt('Is your birthday in Set4?\n 8     9   10  11\n 12  13  14  15\n 24  25  26  27\n 28  29  30  31\nEnter 0 for No and 1 for Yes:'));
(set4==1) ? day +=8 :day==day; 

let set5 = Number(prompt('Is your birthday in Set5?\n 16  17  18  19\n 20  21  22  23\n 24  25  26  27\n 28  29  30  31\nEnter 0 for No and 1 for Yes:'));
(set5==1) ? day +=16 :day==day; 

console.log('Your birthday is '+ day);