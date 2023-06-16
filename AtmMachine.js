var name = prompt("Type your name: ")
var cpf = prompt("Type your cpf: ")
var balance = 0
var biggestDeposit = 0
var biggestWithdraw = 0
var sumDeposits = 0
var sumWithdraws = 0
var cont = 0

while (true) {
    
    var machineProcess = prompt("Do you want to start the process? Type 1 to start or 2 to stop: ")
    if (machineProcess == '1') {
        var options = prompt("Deposit or Withdraw: ")
        if (options[0] == 'D') {
            var value = prompt("How much money you want to deposit?: ")
            var cash = parseFloat(value)
            if (cash > 0) {
                sumDeposits += cash
                balance += cash
                cont += 1
                if (biggestDeposit < cash) {
                biggestDeposit = cash
                }
            } if (cash < 0) {
                console.log("You tried to deposit a negative number, try again.")
            }
            
        } else if (options[0] == 'W'){
            sumWithdraws += 1
            var value2 = prompt("How much money do you want to withdraw?: ")
            var cash2 = parseFloat(value2)
            if (balance >= cash2) {
                cont += 1
                sumWithdraws += cash2
                balance -= cash2
                if (biggestDeposit < cash2) {
                    biggestDeposit = cash2
                }
            } if (balance < cash2){
                console.log("You don't have this amount to withdraw")
            }
        }

    
    console.log("This is the balance: $", balance)
    if (biggestDeposit > biggestWithdraw) {
        console.log("The largest amount traded was $", biggestDeposit, " in deposit.")
    } else if (biggestWithdraw > biggestDeposit) {
        console.log("The largest amount traded was $", biggestWithdraw, " in withdraw.")
    } else {
        console.log("The deposit and withdraw have the same amount.")
    }

    if (cont > 0) {
        console.log((sumDeposits + sumWithdraws) / cont, " that's the average inserted value")
    }
    

    } else if (machineProcess == '2') {
        console.log("The program is stopping now.")
        break;
    } else {
        console.log("You didn't choose any of the right options, try again.")
    }

}
