import type { LessonDefinition } from './lesson-types';

export const indexOfLesson: LessonDefinition = {
  id: 'array-index-of',
  title: 'indexOf(value)',
  description: 'Find the first index where the target appears in the array.',
  fullDescription: 'The indexOf algorithm (also called linear search) finds the position of the first occurrence of a target value. It scans through the array and stops immediately upon finding a match, returning the position. If the value is not found, it returns -1 as a sentinel value indicating \'not found\'.',
  expectedOutputDescription: 'The \'answer\' variable contains the 0-based index of the target\'s first occurrence, or -1 if not found. For [5, 2, 9, 2, 4, 2, 7], searching for 2 returns 1 (the first match at index 1), even though 2 appears at indices 1, 3, and 5.',
  algorithmType: 'search',
  category: 'lookup',
  starterCode: `arr = [5, 2, 9, 2, 4, 2, 7];
target = 2;
answer = -1;
i = 0;

while (i < arr.length) {
    if (arr[i] == target) {
        answer = i;
        break;
    }
    i = i + 1;
}`,
  initialBindings: {
    arr: [5, 2, 9, 2, 4, 2, 7],
    target: 2,
    answer: -1,
    i: 0,
  },
  watchedVariables: ['target', 'answer', 'i'],
  pointerVariables: ['i'],
  primaryStructure: 'array',
  explanationMap: {
    READ_ARRAY: 'The algorithm inspects the current cell before deciding whether to continue scanning.',
    SET_VAR: 'When the target is found, the answer variable stores the matching index.',
    FINISH: 'The lesson ends as soon as the first match is found.',
  },
};