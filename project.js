// 1. Deposit some money
// 2. Determine number of lines to bet on 
// 3. collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again 

// to get the user input you i have install the npm init and npm i promt-sync

// function is reuseable code we can use many times

// function deposit(){
//     return 1;
// }

//user to do enter certain amount so we can use our package
//NAN not a number

const prompt = require("prompt-sync")();

const deposit = () => {
    while(true){
       const depositAmount = prompt('Enter a deposit amount: ');
       const numberOfDepositAmount = parseFloat(depositAmount);

       if(isNaN(numberOfDepositAmount) || numberOfDepositAmount <=0){
           console.log('Invalid deposit amount, try again');
       } else{
            return numberOfDepositAmount;
       }
    }
};

const getNumberOfLines = () => {
     while(true){
        const  lines = prompt("Enter the number of lines to bet on (1-3): ");
        //convert to number
        const numberOfLines = parseFloat(lines);
        
        if(isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines >3){
            console.log('Invalid number of lines, try again.');
        } else{
             return numberOfLines;
        }
    }   
};

const getBet = (balance, lines) =>{
        while(true){
            const bet = prompt("Enter the bet per line: ");
            const numberBet = parseFloat(bet);

            if(isNaN(numberBet) || numberBet <=0 || numberBet > (balance / lines)){
                 console.log("Invalid bet, try again" );
            } else{
                return numberBet;
            }
        }
};


let balance  = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
console.log(bet);