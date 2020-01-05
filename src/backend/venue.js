import * as events from './event-bus.js'
import * as query from './query-bus'
import { database, VENUES_TABLE } from './db.js'

export const ENTRY_SAVED_EVENT = 'entrySaved'
const VENUES_ORDER_BY_USAGE = 'venuesOrderByUsage'

/**
 * Updates venues used previously.
 * 
 * @param {{venue: string}} entry 
 */
async function updateVenue(entry){  
  const key = entry.venue.trim().toUpperCase()
  let venue = await database.table(VENUES_TABLE).get(key)
  if(venue){
    venue.usage++
    console.info('Updated venue', venue)
    await database.table(VENUES_TABLE).update(key, venue)
  } else {
    venue = {
      key,
      name: entry.venue,
      usage: 1
    }
    console.info('Added venue', venue)
    await database.table(VENUES_TABLE).add(venue)
  }
}

async function mostUsedVenues(){
  return database.table(VENUES_TABLE).orderBy('usage').reverse().limit(10).toArray()
}

events.subscribe(ENTRY_SAVED_EVENT, updateVenue)
query.subscribe(VENUES_ORDER_BY_USAGE, mostUsedVenues)