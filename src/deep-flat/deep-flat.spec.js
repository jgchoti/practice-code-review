import { deepFlat, deepFlat2, deepFlat3 } from './deep-flat.js';


// test cases
const cases = [
  {
    label: 'flattens a nested array with numbers',
    arg: [[1, [2, [3, [4]], 5]]],
    answer: [1, 2, 3, 4, 5]
  },
  {
    label: 'flattens a nested array with strings',
    arg: [['a', ['b', [['c'], ['d']], 'e']]],
    answer: ['a', 'b', 'c', 'd', 'e']
  },
  // Add more test cases as needed
];

for (const solution of [deepFlat, deepFlat2, deepFlat3]) {
  describe(
    solution.name +
    ': converts a nested array into a single array with no nesting',
    () => {
      for (const caseInfo of cases) {
        it(caseInfo.label, () => {
          expect(solution(...caseInfo.arg)).toEqual(caseInfo.answer);
        });
      }
    },
  );
}
