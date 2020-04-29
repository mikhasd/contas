import { subscribe as subscribeEvent, dispatch as dispatchEvent } from './event-bus'
import { subscribe as subscribeQuery } from './query-bus'
import { database, BALANCES_TABLE } from './db'
import Period from '../model/Period'

async function updateBalance(entry) {
  const period = Period.fromDate(entry.date).toNumber()
  let balance = await database.table(BALANCES_TABLE).get(period)
  if (balance) {
    balance.total -= entry.amount
    balance.debits += entry.amount
    console.info('Updating balance', balance)
    database.table(BALANCES_TABLE).update(period, balance)
  } else {
    balance = {
      period,
      total: -entry.amount,
      debits: entry.amount,
      credits: 0
    }
    console.info('Inserting balance', balance)
    await database.table(BALANCES_TABLE).add(balance)    
  }
  dispatchEvent('balanceUpdated', balance)
}

async function balanceByPeriod(period){
  return database.table(BALANCES_TABLE).get(period.toNumber())
}

subscribeEvent('entrySaved', updateBalance)
subscribeQuery('balanceByPeriod', balanceByPeriod)