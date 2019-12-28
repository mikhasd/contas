class Account {  
  constructor(balance = 0, currency){
    this.balance = balance
    this.currency = currency
  }
}

/**
 * Gets the current account.
 * 
 * @returns {Account}
 */
export function getAccount(){
  return new Account(45132.77, 'BRL')
}