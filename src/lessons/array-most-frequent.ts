import type { LessonDefinition } from './lesson-types';

export const mostFrequentLesson: LessonDefinition = {
  id: 'array-most-frequent',
  title: 'find value with most occurrences',
  description: 'Count each value frequency and keep the value with the highest count.',
  fullDescription: 'Finding the most frequent value requires counting occurrences of each element, then identifying which value has the highest count. The algorithm uses a nested loop approach: for each array position, it counts how many times that value appears in the entire array. The value with the maximum count becomes the result. While straightforward, this approach is O(n²).',
  expectedOutputDescription: 'The \'bestValue\' variable stores the value that appears most frequently. For [4, 1, 4, 2, 4, 2], the value 4 appears 3 times (most frequent) while 1 and 2 appear 1 and 2 times respectively, so bestValue = 4. If there\'s a tie, the algorithm returns whichever value is encountered first.',
  algorithmType: 'scan',
  category: 'extrema',
  starterCode: `arr = [4, 1, 4, 2, 4, 2];
bestValue = arr[0];
bestCount = 0;
i = 0;

while (i < arr.length) {
    currentCount = 0;
    j = 0;
    while (j < arr.length) {
        if (arr[j] == arr[i]) {
            currentCount = currentCount + 1;
        }
        j = j + 1;
    }

    if (currentCount > bestCount) {
        bestCount = currentCount;
        bestValue = arr[i];
    }

    i = i + 1;
}`,
  initialBindings: {
    arr: [4, 1, 4, 2, 4, 2],
    bestValue: 4,
    bestCount: 0,
    currentCount: 0,
    i: 0,
    j: 0,
  },
  watchedVariables: ['bestValue', 'bestCount', 'currentCount', 'i', 'j'],
  pointerVariables: ['i', 'j'],
  primaryStructure: 'array',
  explanationMap: {
    COMPARE: 'Each value is compared against every cell to compute its frequency.',
    SET_VAR: 'When a larger frequency is found, bestCount and bestValue are updated.',
    FINISH: 'bestValue stores the most frequent element in the array.',
  },
};