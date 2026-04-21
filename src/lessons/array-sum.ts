import type { LessonDefinition } from './lesson-types';

export const sumElementsLesson: LessonDefinition = {
  id: 'array-sum-elements',
  title: 'calculate sum of all elements',
  description: 'Accumulate each array value into a running total.',
  fullDescription: 'This algorithm calculates the sum of all elements in an array. It initializes a sum variable to zero, then iterates through each element and adds it to the running total. This is a fundamental operation in programming and serves as the foundation for many other algorithms like finding averages, computing totals, or weighted sums.',
  expectedOutputDescription: 'After the algorithm completes, the "sum" variable contains the total of all array elements. For example, [3, 8, 1, 6, 9, 2] sums to 29. The final value can be used for further calculations like computing an average.',
  algorithmType: 'scan',
  category: 'aggregate',
  starterCode: `arr = [3, 8, 1, 6, 9, 2];
sum = 0;
i = 0;

while (i < arr.length) {
    sum = sum + arr[i];
    i = i + 1;
}`,
  initialBindings: {
    arr: [3, 8, 1, 6, 9, 2],
    sum: 0,
    i: 0,
  },
  watchedVariables: ['sum', 'i'],
  pointerVariables: ['i'],
  primaryStructure: 'array',
  explanationMap: {
    READ_ARRAY: 'Read the next value from the array to include it in the running total.',
    SET_VAR: 'Update the running sum after each element.',
  },
};
