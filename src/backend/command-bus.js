/**
 * A function that reacts to commands.
 * @template Cmd
 * @typedef {(cmd: Cmd)=>void|Promise<any>} CommandHandler
 */

/**
 * Collection of registered command handlers.
 * @type {Map<string, CommandHandler<any>>}
 */
const HANDLERS = new Map()
/**
 * Dispatch a command on the global command bus
 * @template Cmd
 * @param {string|{type: string} & Cmd} typeOrCommand the command type
 * @param {Cmd?} command
 * @returns {Promise<void>}
 */
export async function dispatch(typeOrCommand, command) {
  /** @type {string} */
  let type
  /** @type {Cmd} */
  let actualCommand
  if (typeof typeOrCommand === 'string') {
    // @ts-ignore
    type = typeOrCommand
    actualCommand = command
  } else {
    type = typeOrCommand.type
    actualCommand = typeOrCommand
  }
  const listener = HANDLERS.get(type)
  if (listener) {
    const result = await listener(actualCommand)
    return result
  } else {
    throw new Error(`There is no handler registered for command of type '${type}'`)
  }

}

/**
 * Subscribe to to dispatched commands
 * 
 * @template Cmd
 * @param {string} type The command type
 * @param {CommandHandler<Cmd>} handler The command handler
 */
export function subscribe(type, handler) {
  if (HANDLERS.has(type)) {
    throw new Error(`There is already a listener registered for command of type '${type}'`)
  } else {
    HANDLERS.set(type, handler)
  }
}