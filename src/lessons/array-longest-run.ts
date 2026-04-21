import type { LessonDefinition } from './lesson-types';

export const longestRunLesson: LessonDefinition = {
  id: 'array-longest-run',
  title: 'find longest consecutive identical run',
  description: 'Track current streak length and update the best streak while scanning.',
  fullDescription: 'Finding the longest consecutive run of identical values requires tracking both the current streak length and the best streak found so far. The algorithm compares adjacent elements: when they match, the current streak extends; when they differ, the streak resets to 1. The best streak length is updated whenever the current streak exceeds it.',
  expectedOutputDescription: 'The \'best\' variable records the length of the longest run of identical consecutive values. For [1, 1, 2, 2, 2, 3, 3], the longest run is 3 (the three 2\'s), so best = 3. The \'current\' variable tracks the active streak as it progresses through the array.',
  algorithmType: 'scan',
  category: 'transform',
  starterCode: `arr = [1, 1, 2, 2, 2, 3, 3];
best = 1;
current = 1;
i = 1;

while (i < arr.length) {
    if (arr[i] == arr[i - 1]) {
        current = current + 1;
        if (current > best) {
            best = current;
        }
    }
    if (arr[i] != arr[i - 1]) {
        current = 1;
    }
    i = i + 1;
}`,
  initialBindings: {
    arr: [1, 1, 2, 2, 2, 3, 3],
    best: 1,
    current: 1,
    i: 1,
  },
  watchedVariables: ['best', 'current', 'i'],
  pointerVariables: ['i'],
  primaryStructure: 'array',
  explanationMap: {
    COMPARE: 'Neighboring values are compared to detect continuation or reset of a run.',
    SET_VAR: 'current tracks the active streak, while best stores the longest streak seen.',
  },
};
