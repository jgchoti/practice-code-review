import { splitObject } from './split-object.js';

// test cases
const cases = [
  {
    label:
      'splits an object into multiple objects with one key/value pair each',
    arg: [{ a: 1, b: 2, c: 3 }],
    answer: [{ a: 1 }, { b: 2 }, { c: 3 }],
  },
  {
    label: 'splits an object with various key/value pairs',
    arg: [{ name: 'robs', age: 25, tall: true, userName: 'sbor' }],
    answer: [
      { name: 'robs' },
      { age: 25 },
      { tall: true },
      { userName: 'sbor' },
    ],
  },
  {
    label: 'returns an empty array for an empty object',
    arg: [{}],
    answer: [],
  },
  // Add more test cases as needed
];

for (const solution of [splitObject]) {
  describe(
    solution.name +
      ': splits an object into multiple objects with one key/value pair each',
    () => {
      for (const caseInfo of cases) {
        it(caseInfo.label, () => {
          expect(solution(...caseInfo.arg)).toEqual(caseInfo.answer);
        });
      }
    },
  );
}
