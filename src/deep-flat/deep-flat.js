/**
 * Converts a nested array into a single array with no nesting
 *
 * It returns a new array and there are no side-effects
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * deepFlat([1, [2, [3, [4]], 5]]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example
 *
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 * // -> ['a', 'b', 'c', 'd', 'e']
 */

export const deepFlat = (array = []) => {
  const result = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...deepFlat(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

export const deepFlat2 = (array = []) => {
  let result = array.slice();
  const isArray = (x) => {
    return Array.isArray(x);
  };
  let i = 0;
  while (i < result.length) {
    if (isArray(result[i])) {
      result = result.flat(); // Flatten the array
    } else {
      i++; // Move to the next element if the current one is not an array
    }
  }

  return result;
};
export const deepFlat3 = (array = []) => {
  let result = [];
  const isArray = (x) => {
    return Array.isArray(x);
  };
  for (let i = 0; i < array.length; i++) {
    if (isArray(array[i])) {
      result = result.concat(deepFlat3(array[i]));
      // result.push(...deepFlat3(array[i]))
    } else {
      result.push(array[i]);
    }
  }

  return result;
};
