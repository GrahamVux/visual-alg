import type { LessonDefinition } from './lesson-types';

export const findMinLesson: LessonDefinition = {
  id: 'array-find-min',
  title: 'find minimum value',
  description: 'Track the current smallest value while scanning the array once.',
  fullDescription: 'The find minimum algorithm mirrors the maximum search, maintaining a variable that tracks the smallest value found so far. For each element, it compares the current value with the existing minimum: if smaller, it becomes the new minimum. This single-pass algorithm achieves O(n) time complexity.',
  expectedOutputDescription: 'After completion, the \'min\' variable holds the smallest value in the array. For [3, 8, 1, 6], min becomes 1. The algorithm works with negative numbers, returning the most negative value as the minimum.',
  algorithmType: 'scan',
  category: 'extrema',
  starterCode: `arr = [3, 8, 1, 6];
min = arr[0];
i = 1;

while (i < arr.length) {
    if (arr[i] < min) {
        min = arr[i];
    }
    i = i + 1;
}`,
  initialBindings: {
    arr: [3, 8, 1, 6],
    min: 3,
    i: 1,
  },
  watchedVariables: ['min', 'i'],
  pointerVariables: ['i'],
  primaryStructure: 'array',
  explanationMap: {
    COMPARE: 'Each comparison checks whether the current cell is smaller than the best minimum seen so far.',
    SET_VAR: 'A smaller value replaces the current minimum.',
  },
};