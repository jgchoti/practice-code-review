/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */
export const difference = (array = [], values = []) => {
  let result = array.filter(x => !values.includes(x));
  let noDuplicateResult = new Set(result);
  return [...noDuplicateResult]
};


export const loop = (array = [], values = []) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!values.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return [...new Set(result)]; 
}

export const reduce = (array = [], values = []) => {
  const result = array.reduce((acc, current) => {
    if (!values.includes(current)) {
      acc.push(current);
    }
    return acc;
  }, []);

  return [...new Set(result)]; // Remove duplicates
};