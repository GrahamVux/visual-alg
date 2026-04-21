import type { LessonDefinition } from './lesson-types';

export const findMaxLesson: LessonDefinition = {
  id: 'array-find-max',
  title: 'find maximum value',
  description: 'Track the current best value while scanning the array once.',
  fullDescription: 'The find maximum algorithm scans through an array to locate its largest value. It maintains a variable that tracks the best value found so far. For each element, it compares the current value with the existing maximum: if the current value is larger, it becomes the new maximum. This algorithm works in a single pass, achieving O(n) time complexity. A similar approach can find minimum values by reversing the comparison.',
  expectedOutputDescription: 'After completion, the "max" variable holds the largest value in the array. For example, in [3, 8, 1, 6], max becomes 8. The algorithm also works with negative numbers, returning the least negative value as the maximum.',
  algorithmType: 'scan',
  category: 'extrema',
  starterCode: `arr = [3, 8, 1, 6];
max = arr[0];
i = 1;

while (i < arr.length) {
    if (arr[i] > max) {
        max = arr[i];
    }
    i = i + 1;
}`,
  initialBindings: {
    arr: [3, 8, 1, 6],
    max: 3,
    i: 1,
  },
  watchedVariables: ['max', 'i'],
  pointerVariables: ['i'],
  primaryStructure: 'array',
  explanationMap: {
    COMPARE: 'Each comparison checks whether the current cell beats the best value seen so far.',
    SET_VAR: 'A larger value replaces the current maximum.',
  },
};