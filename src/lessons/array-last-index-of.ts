import type { LessonDefinition } from './lesson-types';

export const lastIndexOfLesson: LessonDefinition = {
  id: 'array-last-index-of',
  title: 'lastIndexOf(value)',
  description: 'Find the last index where the target appears in the array.',
  fullDescription: 'The lastIndexOf algorithm finds the last occurrence of a target value by scanning from right to left. Starting from the end of the array, it returns the index of the first match found when scanning backwards. This differs from indexOf which scans left-to-right for the first occurrence.',
  expectedOutputDescription: 'The \'answer\' variable contains the 0-based index of the target\'s last occurrence, or -1 if not found. For [5, 2, 9, 2, 4, 2, 7], searching for 2 returns 5 (the rightmost occurrence), unlike indexOf which would return 1.',
  algorithmType: 'search',
  category: 'lookup',
  starterCode: `arr = [5, 2, 9, 2, 4, 2, 7];
target = 2;
answer = -1;
i = arr.length - 1;

while (i >= 0) {
    if (arr[i] == target) {
        answer = i;
        break;
    }
    i = i - 1;
}`,
  initialBindings: {
    arr: [5, 2, 9, 2, 4, 2, 7],
    target: 2,
    answer: -1,
    i: 6,
  },
  watchedVariables: ['target', 'answer', 'i'],
  pointerVariables: ['i'],
  primaryStructure: 'array',
  explanationMap: {
    READ_ARRAY: 'The algorithm inspects elements from right to left to find the final occurrence first.',
    SET_VAR: 'When the target is found, answer stores that index and stops the search.',
    FINISH: 'The scan finishes at the first match from the right, which is the last occurrence overall.',
  },
};
