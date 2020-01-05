import Dexie from 'dexie'

export const database = new Dexie('default')

export const VENUES_TABLE = 'venues'
export const ENTRIES_TABLE = 'entries'

database.version(1).stores({
  [ENTRIES_TABLE]: '++id,date,timestamp',
  [VENUES_TABLE]: 'key,usage'
})

