/**
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * This function has no side-effects, the argument object is not modified
 *
 * @param {Object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 * @example
 *
 * splitObject({ a: 1, b: 2, c: 3 });
 * // -> [{ a: 1 }, { b: 2 }, { c: 3 }]
 *
 * @example
 *
 * splitObject({ name: 'robs', age: 25, tall: true, userName: 'sbor' });
 * // -> [{ name: 'robs }, { age: 25 }, { tall: true }, { userName: 'sbor' }]
 *
 * @example
 *
 * splitObject({});
 * // -> []
 */
export const splitObject = (toSeparate={}) => {
  let keys = Object.keys(toSeparate)
  let result = []
  for (let i = 0; i < keys.length; i++) {
    const splitObj = {}; 
    splitObj[keys[i]] = toSeparate[keys[i]]; 
    result.push(splitObj); 
  }
  return result
};

// export const splitObject = (toSeparate = {}) => {
//   const result = [];

//   for (const [key, value] of Object.entries(toSeparate)) {
//     const splitObj = {};
//     splitObj[key] = value;
//     result.push(splitObj);
//   }

//   return result;
// };
