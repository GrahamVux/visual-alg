import type { LessonDefinition } from './lesson-types';

export const containsLesson: LessonDefinition = {
  id: 'array-contains',
  title: 'contains(value)',
  description: 'Check whether a target value appears at least once in the array.',
  fullDescription: 'The contains algorithm (also called linear search or sequential search) checks if a specific value exists anywhere in the array. It scans through elements one by one, comparing each with the target value. As soon as a match is found, the algorithm stops and reports success. If the entire array is scanned without finding a match, it reports that the value is not present. This is useful for membership testing in unsorted data.',
  expectedOutputDescription: 'The "found" variable is set to 1 if the target is found, or remains 0 if not found. For example, searching for 8 in [5, 2, 9, 2, 4, 2, 7] results in found=0 (not present), but searching for 9 results in found=1.',
  algorithmType: 'search',
  category: 'lookup',
  starterCode: `arr = [5, 2, 9, 2, 4, 2, 7];
target = 8;
found = 0;
i = 0;

while (i < arr.length) {
    if (arr[i] == target) {
        found = 1;
        break;
    }
    i = i + 1;
}`,
  initialBindings: {
    arr: [5, 2, 9, 2, 4, 2, 7],
    target: 8,
    found: 0,
    i: 0,
  },
  watchedVariables: ['target', 'found', 'i'],
  pointerVariables: ['i'],
  primaryStructure: 'array',
  explanationMap: {
    READ_ARRAY: 'Each step checks the next element against the requested target.',
    SET_VAR: 'found becomes 1 as soon as a matching value is discovered.',
    FINISH: 'Execution ends when a match is found or when the scan reaches the end.',
  },
};
