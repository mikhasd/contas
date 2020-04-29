/**
 * A function that reacts to queries.
 * @template QueryArguments
 * @template ResponseType
 * @typedef {(...query: QueryArguments[])=>Promise<ResponseType>} QueryHandler
 */

/**
 * Collection of registered query handlers.
 * @type {Map<string, QueryHandler<any, any>>}
 */
const HANDLERS = new Map()
/**
 * Request a query to be executed
 * @template QueryArguments
 * @template ResponseType
 * @param {string} name The query name
 * @param {QueryArguments[]} args The query arguments
 * @returns {Promise<ResponseType>}
 */
export async function query(name, ...args) {
  const handler = HANDLERS.get(name)
  if (handler) {
    return handler(...args)
  } else {
    throw new Error(`There is no handler for query of names '${name}'`)
  }

}

/**
 * Handles a given query by its name
 * @template QueryArguments
 * @template ResponseType
 * @param {string} name The query type
 * @param {QueryHandler<QueryArguments, ResponseType>} handler The query handler
 */
export function subscribe(name, handler) {
  if (HANDLERS.has(name)) {
    throw new Error(`There is already a handler registered for query of name '${name}'`)
  } else {
    HANDLERS.set(name, handler)
  }
}