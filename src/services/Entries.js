/**
 * @typedef {import('./Session.js').Period} Period
 */

/**
 * An accounting entry
 * @typedef {{title: string, description: string, amount: number}} Entry
 */

/**
 * Get the entries for a given period.
 * 
 * @param {Period} period The period to get the entries
 * @returns {Entry[]}
 */
export function getEntries(period) {
  switch (period.month) {
    case 12:
      return [
        { title: "Coto", description: "Compras do mês", amount: 3000.00 },
        { title: "Pedidos Ya", description: "Japones", amount: 900 },
      ]
    case 11:
      return [
        { title: "Ethiopian", description: "Voo Sao Paulo", amount: 39000.00 },
        { title: "Veterinario", description: "Vacinas", amount: 900 },
      ]
    case 10:
      return [
        { title: "Cerveja", description: "Barata", amount: 4.00 },
        { title: "Cerveja", description: "Na veia", amount: 10 },
      ]
    default:
      return [
        { title: "Oooo", description: "oooO", amount: 4.00 },
        { title: "OOOOO", description: "ooooo", amount: 10 },
      ]
  }
}