class Utils {
  /**
  * 
  * @param {number} length 
  * @param {number} value 
  * @return {number[]}
  */
  static prepopulate1DArray(length, value) {
    return Array.apply(null, Array(length))
                .map(Number.prototype.valueOf, value)
  }

  /**
   * 
   * @param {number} rows 
   * @param {number} columns 
   * @param {number} value 
   * @return {number[][]}
   */
  static prepopulate2DArray(rows, columns, value) {
    return Array.apply(null, Array(rows))
                .map(_ => Utils.prepopulate1DArray(columns, value));
  }
}
