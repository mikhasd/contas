import * as events from './event-bus'
import * as commands from './command-bus'
import * as query from './query-bus'
import { database, ENTRIES_TABLE } from './db'


export const SAVE_ENTRY_COMMAND = 'saveEntry'
export const ENTRY_SAVED_EVENT = 'entrySaved'
export const ENTRIES_BY_PERIOD_QUERY = 'entriesByPeriod'

/**
 * @typedef {import('../model/Period').default} Period
 */

/**
 * An accounting entry
 * @typedef {{venue: string, description: string, amount: number, id: number, timestamp: number}} Entry
 */


 /**
  * 
  * @param {Entry} entry The entry to be persisted
  */
async function saveEntry(entry) {
  await database.table(ENTRIES_TABLE).add(entry)
  events.dispatch(ENTRY_SAVED_EVENT, entry)
}

/**
 * 
 * @param {Period} period 
 */
async function queryEntries(period){
  const start = period.toDate().getTime()
  const end = period.next().toDate().getTime()

  return database.table(ENTRIES_TABLE)
    .where('timestamp')
    .between(start, end)
    .toArray()
}

commands.subscribe(SAVE_ENTRY_COMMAND, saveEntry)
query.subscribe(ENTRIES_BY_PERIOD_QUERY, queryEntries)