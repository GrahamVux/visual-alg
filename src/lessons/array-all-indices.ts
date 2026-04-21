import type { LessonDefinition } from './lesson-types';

export const allIndicesLesson: LessonDefinition = {
  id: 'array-all-indices',
  title: 'find all indices of a value',
  description: 'Collect every index where the target appears.',
  fullDescription: 'The find all indices algorithm locates every position where a target value appears in an array. It scans through all elements and collects the indices of matching occurrences. Unlike simple search which stops at the first match, this algorithm must examine the entire array. Results are stored in an array that grows with each match found.',
  expectedOutputDescription: 'The \'indices\' array contains all 0-based positions where the target value appears. For example, searching for 4 in [4, 2, 4, 1, 4] results in indices = [0, 2, 4]. The array grows with each match found, and its length equals the total occurrences of the target.',
  algorithmType: 'search',
  category: 'lookup',
  starterCode: `arr = [4, 2, 4, 1, 4];
target = 4;
indices = [];
i = 0;

while (i < arr.length) {
    if (arr[i] == target) {
        indices[indices.length] = i;
    }
    i = i + 1;
}`,
  initialBindings: {
    arr: [4, 2, 4, 1, 4],
    target: 4,
    indices: [],
    i: 0,
  },
  watchedVariables: ['target', 'indices', 'i'],
  pointerVariables: ['i'],
  primaryStructure: 'array',
  explanationMap: {
    COMPARE: 'The current value is compared with the target.',
    SET_VAR: 'Matching positions are appended to the indices result array.',
  },
};
