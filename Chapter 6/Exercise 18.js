// **6.18 (Check password) Some websites impose certain rules for passwords. Write a 
// method that checks whether a string is a valid password. Suppose the password 
// rules are as follows:
//  ■ A password must have at least eight characters.
//  ■ A password consists of only letters and digits.
//  ■ A password must contain at least two digits.
// Write a program that prompts the user to enter a password and displays Valid
// Password if the rules are followed or Invalid Password otherwise.


function password(){
    let user = prompt('Enter a password:');
    let count = 0;
    let valid = true;

    if (user.length<8) {
        valid = false;
    }else{
        for (let i = 0; i < user.length; i++) {
            let lower = user[i].toLowerCase();
            if (user[i] >= "0" && user[i] <= "9") {
                count++;
            }
            if (lower >= "a" && lower <= "z" || user[i] >= "0" && user[i] <= "9") {
                valid = true;
            }else{
                valid = false;
                break;    
            }  
        }
        if (count<2) {
            valid = false
        }
        if (valid==true) {
            alert('Valid password')
        }else{      
            alert('Invalid password\nPassword must have at least eight characters.\nPassword consists of only letters and digits.\nPassword must contain at least two digits.')
        }
    }
}
password()