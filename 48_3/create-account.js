function createAccount(pin, amount) {
    let thePin = pin
    let balance = amount || 0
    

    return {
        checkBalance(pin) {
            if( pin === thePin ) return `$${balance}`
            else return 'Invalid PIN.'
        },
        deposit(pin, amount) {
            if ( pin === thePin ) {
                balance += amount
                return `Succesfully deposited $${amount}. Current balance: $${balance}.`
            } else return 'Invalid PIN.'
        },
        withdraw(pin, amount) {
            if ( pin === thePin ) {
                if (balance - amount > 0) {
                    balance -= amount
                    return `Succesfully withdrew $${amount}. Current balance: $${balance}.`
                } else return 'Withdrawal amount exceeds account balance. Transaction cancelled.'

            } else return 'Invalid PIN.'
        },
        changePin(pin, newPin) {
            if ( pin === thePin ) {
                thePin = newPin
                return 'PIN successfully changed!'
            } else return 'Invalid PIN.'
        }
        
    }
}


module.exports = { createAccount };
