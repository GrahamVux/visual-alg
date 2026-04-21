import type { LessonDefinition } from './lesson-types';

export const reverseArrayLesson: LessonDefinition = {
  id: 'array-reverse',
  title: 'reverse array',
  description: 'Use two pointers and swap mirrored positions until they meet.',
  fullDescription: 'Array reversal uses a two-pointer technique where one pointer starts at the beginning and another at the end. The pointers move toward each other, swapping the values at their positions. This mirrors the outermost elements inward, completely reversing the array order in-place without requiring extra memory proportional to array size.',
  expectedOutputDescription: 'After completion, the \'arr\' array is reversed in-place. For [1, 2, 3, 4, 5], the result is [5, 4, 3, 2, 1]. The two pointers \'i\' and \'j\' start at opposite ends and meet in the middle, with each swap moving elements toward their reversed positions.',
  algorithmType: 'two-pointer',
  category: 'transform',
  starterCode: `arr = [1, 2, 3, 4, 5];
i = 0;
j = arr.length - 1;

while (i < j) {
    swap(arr, i, j);
    i = i + 1;
    j = j - 1;
}`,
  initialBindings: {
    arr: [1, 2, 3, 4, 5],
    i: 0,
    j: 4,
  },
  watchedVariables: ['i', 'j'],
  pointerVariables: ['i', 'j'],
  primaryStructure: 'array',
  explanationMap: {
    SWAP: 'The values at the two pointer positions exchange places to mirror the array.',
    MOVE_POINTER: 'Both pointers move inward after each swap, shrinking the unsolved range.',
    FINISH: 'Reversal finishes when the left and right pointers meet or cross.',
  },
};