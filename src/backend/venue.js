import * as events from './event-bus.js'
import { database, VENUES_TABLE } from './db.js'

export const ENTRY_SAVED_EVENT = 'entrySaved'

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
    await database.table(VENUES_TABLE).update(key, venue)
  } else {
    venue = {
      key,
      name: entry.venue,
      usage: 1
    }
    await database.table(VENUES_TABLE).add(venue)
  }
}

events.subscribe(ENTRY_SAVED_EVENT, updateVenue)
