export default class Period {
  /**
   * Creates a new `Period`
   * @param {number} year The year
   * @param {number} month The year
   */
  constructor(year, month) {
    if (year < 0)
      throw new Error('Year must be positive')
    if (month < 1 || month > 12)
      throw new Error('Month must be between 1 and 12')

    this.year = year
    this.month = month
  }

  /**
   * Gets the current period.
   * 
   * @returns {Period} the current period
   */
  static current() {
    return Period.fromDate(new Date())
  }

  /**
   * Gets the period for the given `date`.
   * @param {Date} date The date
   * @returns {Period} the current period
   */
  static fromDate(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    return new Period(year, month)
  }

  next() {
    let nextYear, nextMonth
    if (this.month === 12) {
      nextMonth = 1
      nextYear = this.year + 1
    } else {
      nextMonth = this.month + 1
      nextYear = this.year
    }
    return new Period(nextYear, nextMonth)
  }

  previous() {
    let prevYear, prevMonth
    if (this.month === 1) {
      prevMonth = 12
      prevYear = this.year - 1
    } else {
      prevMonth = this.month - 1
      prevYear = this.year
    }
    return new Period(prevYear, prevMonth)
  }

  toDate() {
    return new Date(this.year, this.month - 1)
  }

  toNumber(){
    return (this.year * 100) + this.month
  }

  valueOf(){
    return this.toNumber()
  }
}