import type { LessonDefinition } from './lesson-types';

export const pairsWithSumLesson: LessonDefinition = {
  id: 'array-pairs-with-sum',
  title: 'find pairs with target sum',
  description: 'Check all index pairs and store value pairs whose sum equals the target.',
  fullDescription: 'Finding pairs with a target sum examines all unique index pairs and collects value pairs whose sum equals the target. A nested loop checks every combination where the inner index starts after the outer index to avoid duplicates. Matching pairs are stored in parallel arrays: one for left values, one for right values.',
  expectedOutputDescription: 'The \'pairLeft\' and \'pairRight\' arrays store matching pairs as two separate arrays. For arr=[1, 5, 7, -1, 5] with target=6, the pairs are (1,5), (7,-1), and (1,5) again, stored as pairLeft=[1, 7, 1] and pairRight=[5, -1, 5]. These parallel arrays preserve the association between paired elements.',
  algorithmType: 'scan',
  category: 'transform',
  starterCode: `arr = [1, 5, 7, -1, 5];
target = 6;
pairLeft = [];
pairRight = [];
i = 0;

while (i < arr.length) {
    j = i + 1;
    while (j < arr.length) {
        if (arr[i] + arr[j] == target) {
            pairLeft[pairLeft.length] = arr[i];
            pairRight[pairRight.length] = arr[j];
        }
        j = j + 1;
    }
    i = i + 1;
}`,
  initialBindings: {
    arr: [1, 5, 7, -1, 5],
    target: 6,
    pairLeft: [],
    pairRight: [],
    i: 0,
    j: 1,
  },
  watchedVariables: ['target', 'pairLeft', 'pairRight', 'i', 'j'],
  pointerVariables: ['i', 'j'],
  primaryStructure: 'array',
  explanationMap: {
    COMPARE: 'Two values are added and compared with the target sum.',
    SET_VAR: 'Matching pairs are recorded into the output arrays.',
  },
};
