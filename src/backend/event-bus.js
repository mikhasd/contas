/**
 * Checks if the given object is a `Promise`.
 * 
 * @param {any} maybePromise 
 * @returns {boolean}
 */
function isPromise(maybePromise) {
  return maybePromise && Object.prototype.toString.call(maybePromise) === "[object Promise]";
}

/**
 * A function that reacts to events.
 * @template Evt
 * @typedef {(evt: Evt)=>void|Promise<void>} EventHandler
 */

 /**
  * Call the event handler.
  * 
  * @template Evt
  * @param {string} type The type of the event
  * @param {Evt} event The actual event
  * @param {EventHandler<Evt>} listener The current event listener that will be called
  */
function callListener(type, event, listener) {
  try {
    let res = listener(event);
    if (isPromise(res)) {
      // @ts-ignore
      res.catch(err => {
        console.error(`Error while handling event of type '${type}'`, err);
      });
    }
  }
  catch (err) {
    console.error(`Error while handling event of type '${type}'`, err);
  }
}

/**
 * Collection of registered event handlers.
 * @type {Map<string, Set<EventHandler<any>>>}
 */
const LISTENERS = new Map()
/**
 * Dispatch a event on the global event bus
 * @template Evt
 * @param {string|{type: string} & Evt} typeOrEvent the event type
 * @param {Evt?} event
 */
export function dispatch(typeOrEvent, event) {
  /** @type {string} */
  let type
  /** @type {Evt} */
  let actualEvent
  if (typeof typeOrEvent === 'string') {
    // @ts-ignore
    type = typeOrEvent
    actualEvent = event
  } else {
    type = typeOrEvent.type
    actualEvent = typeOrEvent
  }
  const eventListeners = LISTENERS.get(type)
  if (eventListeners && eventListeners.size > 0) {
    for (let listener of eventListeners) {
      callListener(type, actualEvent, listener);
    }
  } else {
    console.warn(`There is no handler registered for event of type '${type}'`)
  }  
}

/**
 * Subscribe to to dispatched events
 * 
 * @template Evt
 * @param {string} type The event type
 * @param {EventHandler<Evt>} handler The event handler
 */
export function subscribe(type, handler) {
  let registeredListeners = LISTENERS.get(type)
  if (!registeredListeners) {
    registeredListeners = new Set([handler])
    LISTENERS.set(type, registeredListeners)
  } else {
    registeredListeners.add(handler)
  }
}