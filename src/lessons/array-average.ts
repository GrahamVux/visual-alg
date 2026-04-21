import type { LessonDefinition } from './lesson-types';

export const averageElementsLesson: LessonDefinition = {
  id: 'array-average-elements',
  title: 'calculate average of all elements',
  description: 'Accumulate the sum, then divide by the array length to compute the average.',
  fullDescription: 'Computing an average requires two steps: first accumulate the sum of all elements, then divide by the number of elements. This algorithm demonstrates the pattern of combining a scan operation (to sum values) with a final calculation. The average is a useful statistic for understanding central tendency in numerical data.',
  expectedOutputDescription: 'After completion, the \'average\' variable holds the mean of all array elements. For [3, 8, 1, 6, 9, 2], the sum is 29 and the average is 29/6 ≈ 4.83. The intermediate \'sum\' variable tracks the running total throughout the scan phase.',
  algorithmType: 'scan',
  category: 'aggregate',
  starterCode: `arr = [3, 8, 1, 6, 9, 2];
sum = 0;
average = 0;
i = 0;

while (i < arr.length) {
    sum = sum + arr[i];
    i = i + 1;
}

average = sum / arr.length;`,
  initialBindings: {
    arr: [3, 8, 1, 6, 9, 2],
    sum: 0,
    average: 0,
    i: 0,
  },
  watchedVariables: ['sum', 'average', 'i'],
  pointerVariables: ['i'],
  primaryStructure: 'array',
  explanationMap: {
    READ_ARRAY: 'Read each value to build the total sum before averaging.',
    SET_VAR: 'Update either the running sum or the final average value.',
  },
};
