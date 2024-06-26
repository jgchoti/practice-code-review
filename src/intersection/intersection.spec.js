import { filterIntersection } from './intersection.js';


// test cases
const cases = [
  {
    label: '[2, 1], [2, 3] => [2]',
    argA: [2, 1],
    argB: [2, 3],
    answer: [2]
  },
  {
    label: '[2, 1, 2], [2, 3] => [2]',
    argA: [2, 1, 2],
    argB: [2, 3],
    answer: [2]
  },
  {
    label: '[], [1, 2, 3] => []',
    argA: [],
    argB: [1, 2, 3],
    answer: []
  },
  {
    label: '[4, 5, 6], [6, 7, 8] => [6]',
    argA: [4, 5, 6],
    argB: [6, 7, 8],
    answer: [6]
  },
  {
    label: '[10, 20, 30], [30, 40, 50] => [30]',
    argA: [10, 20, 30],
    argB: [30, 40, 50],
    answer: [30]
  },
  {
    label: '[0.5, 1.5, 2.5], [1.5, 2.5, 3.5] => [1.5, 2.5]',
    argA: [0.5, 1.5, 2.5],
    argB: [1.5, 2.5, 3.5],
    answer: [1.5, 2.5]
  },
  {
    label: '[0.1, 0.2, 0.3], [0.2, 0.3, 0.4] => [0.2, 0.3]',
    argA: [0.1, 0.2, 0.3],
    argB: [0.2, 0.3, 0.4],
    answer: [0.2, 0.3]
  },
  {
    label: '[-1, -2, -3], [-2, -3, -4] => [-2, -3]',
    argA: [-1, -2, -3],
    argB: [-2, -3, -4],
    answer: [-2, -3]
  },
  {
    label: '[1000000000, 2000000000, 3000000000], [2000000000, 3000000000, 4000000000] => [2000000000, 3000000000]',
    argA: [1000000000, 2000000000, 3000000000],
    argB: [2000000000, 3000000000, 4000000000],
    answer: [2000000000, 3000000000]
  }, {
    label: '[0, 0, 0], [0, 1, 2] => [0]',
    argA: [0, 0, 0],
    argB: [0, 1, 2],
    answer: [0]
  },
  {
    label: '[-1, -2, -3], [-2, -4, -6] => [-2]',
    argA: [-1, -2, -3],
    argB: [-2, -4, -6],
    answer: [-2]
  },
  {
    label: '[1, 2, 3], [3, 2, 1] => [1, 2, 3]',
    argA: [1, 2, 3],
    argB: [3, 2, 1],
    answer: [1, 2, 3]
  }, {
    label: '[1, "2", true], ["2", false] => ["2"]',
    argA: [1, '2', true],
    argB: ['2', false],
    answer: ['2']
  },
  {
    label: '[0.0001, 0.0002, 0.0003], [0.0002, 0.0003, 0.0004] => [0.0002, 0.0003]',
    argA: [0.0001, 0.0002, 0.0003],
    argB: [0.0002, 0.0003, 0.0004],
    answer: [0.0002, 0.0003]
  },
  {
    label: '[1.111, 2.222, 3.333], [2.222, 3.333, 4.444] => [2.222, 3.333]',
    argA: [1.111, 2.222, 3.333],
    argB: [2.222, 3.333, 4.444],
    answer: [2.222, 3.333]
  },
  {
    label: '[-1000, -2000, -3000], [-2000, -3000, -4000] => [-2000, -3000]',
    argA: [-1000, -2000, -3000],
    argB: [-2000, -3000, -4000],
    answer: [-2000, -3000]
  },
  {
    label: '[999999, 9999999, 99999999], [9999999, 99999999, 999999999] => [9999999, 99999999]',
    argA: [999999, 9999999, 99999999],
    argB: [9999999, 99999999, 999999999],
    answer: [9999999, 99999999]
  },
  {
    label: '[6, 6, 3, "hi"], [2, "hi", 46] => ["hi"]',
    argA: [6, 6, 3, "hi"],
    argB: [2, "hi", 46],
    answer: ["hi"]
  },
  {
    label: '[1.5e6, 2.5e6, 3.5e6], [2.5e6, 3.5e6, 4.5e6] => [2.5e6, 3.5e6]',
    argA: [1.5e6, 2.5e6, 3.5e6],
    argB: [2.5e6, 3.5e6, 4.5e6],
    answer: [2.5e6, 3.5e6]
  },
  {
    label: "['hi', 'hello', ''], ['good', 'bye', ''] => ['']",
    argA: ['hi', 'hello', ''],
    argB: ['good', 'bye', ''],
    answer: ['']
  }
]


// run solution to test 
for (const solution of [filterIntersection]) {
  describe(
    solution.name +
    ': return an array of values that are in both the first and the second arrays',
    () => {
      for (const caseInfo of cases) {
        it(caseInfo.label, () => {
          expect(solution(caseInfo.argA, caseInfo.argB)).toEqual(caseInfo.answer);
        });
      }
    },
  );
}
