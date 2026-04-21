import type { LessonDefinition } from './lesson-types';

export const indexOfMaxLesson: LessonDefinition = {
  id: 'array-index-of-max',
  title: 'find index of maximum value',
  description: 'Scan the array and keep the index of the largest value seen so far.',
  fullDescription: 'Finding the index of the maximum value requires tracking both the best value found and its position. Instead of storing the value itself, the algorithm maintains an index pointer that gets updated whenever a larger value is discovered. This enables efficient retrieval of both the extreme value and its location.',
  expectedOutputDescription: 'The \'maxIndex\' variable stores the 0-based position of the largest value. For [3, 8, 1, 6, 9, 2], the maximum is 9 at index 4, so maxIndex = 4. If multiple values tie for maximum, the index of the first occurrence is returned.',
  algorithmType: 'scan',
  category: 'extrema',
  starterCode: `arr = [3, 8, 1, 6, 9, 2];
maxIndex = 0;
i = 1;

while (i < arr.length) {
    if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
    }
    i = i + 1;
}`,
  initialBindings: {
    arr: [3, 8, 1, 6, 9, 2],
    maxIndex: 0,
    i: 1,
  },
  watchedVariables: ['maxIndex', 'i'],
  pointerVariables: ['i', 'maxIndex'],
  primaryStructure: 'array',
  explanationMap: {
    COMPARE: 'Compare the current value with the value at maxIndex to decide whether to update the best index.',
    SET_VAR: 'When a larger value is found, maxIndex moves to that position.',
  },
};