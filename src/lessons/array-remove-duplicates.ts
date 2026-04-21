import type { LessonDefinition } from './lesson-types';

export const removeDuplicatesLesson: LessonDefinition = {
  id: 'array-remove-duplicates',
  title: 'remove duplicates from array',
  description: 'Build a new array that keeps only the first occurrence of each value.',
  fullDescription: 'Removing duplicates builds a new array containing only the first occurrence of each distinct value. The algorithm scans the original array and for each element, checks if it already exists in the unique array. Only unseen values are appended, preserving the order of first appearances while eliminating all subsequent duplicates.',
  expectedOutputDescription: 'The \'unique\' array contains each distinct value from the original array, in order of first appearance. For [3, 1, 3, 2, 4], the result is unique = [3, 1, 2, 4]. The length of unique equals the count of distinct values, and it excludes all but the first occurrence of each value.',
  algorithmType: 'scan',
  category: 'transform',
  starterCode: `arr = [3, 1, 3, 2, 4];
unique = [];
i = 0;

while (i < arr.length) {
    seen = 0;
    j = 0;

    while (j < unique.length) {
        if (unique[j] == arr[i]) {
            seen = 1;
            break;
        }
        j = j + 1;
    }

    if (seen == 0) {
        unique[unique.length] = arr[i];
    }

    i = i + 1;
}`,
  initialBindings: {
    arr: [3, 1, 3, 2, 4],
    unique: [],
    i: 0,
    j: 0,
    seen: 0,
  },
  watchedVariables: ['unique', 'seen', 'i', 'j'],
  pointerVariables: ['i', 'j'],
  primaryStructure: 'array',
  explanationMap: {
    COMPARE: 'The inner scan checks whether the current value already exists in unique.',
    SET_VAR: 'Only unseen values are appended, preserving first-appearance order.',
  },
};
