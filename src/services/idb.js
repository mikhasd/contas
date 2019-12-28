/**
 * Open an indexedDB connection.
 * 
 * @param {string?} name The name of the database or defaults to `default`
 * @param {number?} version The version of the database or defaults to `0`
 * 
 * @returns {Promise<IDBDatabase>}
 */
export async function open(name='default', version=0){
  const idbOpenRequest = indexedDB.open(name, version)
  
  return new Promise((resolve, reject) => {
    idbOpenRequest.addEventListener('error', ev => reject(ev))    
    idbOpenRequest.addEventListener('success', ev => resolve(idbOpenRequest.result))
  })
}