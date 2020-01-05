import * as events from './event-bus'
import * as commands from './command-bus'
import * as query from './query-bus'
import { database, ENTRIES_TABLE } from './db'

export const SAVE_ENTRY_COMMAND = 'saveEntry'
export const ENTRY_SAVED_EVENT = 'entrySaved'
export const ENTRIES_BY_PERIOD_QUERY = 'entriesByPeriod'


/**
 * An accounting entry
 * @typedef {{venue: string, description: string, amount: number, id: number, timestamp: number}} Entry
 */

 /**
  * 
  * @param {Entry} entry The entry to be persisted
  */
async function saveEntry(entry) {
  entry.timestamp = new Date().getTime()
  await database.table(ENTRIES_TABLE).add(entry)
  events.dispatch(ENTRY_SAVED_EVENT, entry)
}

/**
 * @typedef {import('../model/Period').default} Period
 * @param {Period} period 
 */
async function queryEntries(period){
  const start = period.toDate()
  const end = period.next().toDate()

  return database.table(ENTRIES_TABLE)
    .where('date')
    .between(start, end)
    .reverse()
    .toArray()
}

commands.subscribe(SAVE_ENTRY_COMMAND, saveEntry)
query.subscribe(ENTRIES_BY_PERIOD_QUERY, queryEntries)