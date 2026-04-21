import type { LessonDefinition } from './lesson-types';

export const isSortedLesson: LessonDefinition = {
  id: 'array-is-sorted',
  title: 'check if array is sorted',
  description: 'Validate either ascending or descending order by scanning adjacent values.',
  fullDescription: 'Checking if an array is sorted requires scanning adjacent pairs to verify they maintain the expected order. The algorithm supports both ascending and descending directions. If any adjacent pair violates the order, the array is not sorted. The scan can terminate early upon detecting the first violation.',
  expectedOutputDescription: 'The \'sorted\' variable equals 1 if the array maintains the specified order (ascending or descending), or 0 otherwise. For [9, 7, 7, 3, 1] in descending mode, sorted = 1. For the same array in ascending mode, sorted = 0 since the values are not ascending.',
  algorithmType: 'scan',
  category: 'lookup',
  starterCode: `arr = [9, 7, 7, 3, 1];
direction = -1;
sorted = 1;
i = 1;

while (i < arr.length) {
    if (direction == 1) {
        if (arr[i] < arr[i - 1]) {
            sorted = 0;
            break;
        }
    }
    if (direction == -1) {
        if (arr[i] > arr[i - 1]) {
            sorted = 0;
            break;
        }
    }
    i = i + 1;
}`,
  initialBindings: {
    arr: [9, 7, 7, 3, 1],
    direction: -1,
    sorted: 1,
    i: 1,
  },
  watchedVariables: ['direction', 'sorted', 'i'],
  pointerVariables: ['i'],
  primaryStructure: 'array',
  explanationMap: {
    COMPARE: 'Each step checks whether adjacent values respect the selected order.',
    FINISH: 'If no violation is found, sorted stays 1; otherwise it becomes 0.',
  },
};
