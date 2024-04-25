import { difference, loop } from './difference.js';


// test cases
const cases = [
  {
    label: 'returns values in the first array that are not in the second array',
    argA: [[2, 1], [2, 3]],
    answer: [1]
  },
  {
    label: 'returns values in the first array that are not in the second array (with repeated values)',
    argA: [[1, 2, 1], [2, 3]],
    answer: [1]
  },
  // Add more test cases as needed
];

for (const solution of [difference, loop]) {
  describe(
    solution.name +
    ': creates an array of values that are in the first array, but not in the second array',
    () => {
      for (const caseInfo of cases) {
        it(caseInfo.label, () => {
          expect(solution(...caseInfo.argA)).toEqual(caseInfo.answer);
        });
      }
    },
  );
}
