import type { LessonDefinition } from './lesson-types';

export const bubbleSortLesson: LessonDefinition = {
  id: 'array-bubble-sort',
  title: 'bubble sort',
  description: 'Bubble the largest remaining value toward the end through repeated compares and swaps.',
  fullDescription: 'Bubble sort is a simple sorting algorithm that repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order. Each pass bubbles the largest unsorted element to its correct position. The algorithm repeats until no more swaps are needed. While easy to understand, bubble sort has O(n²) time complexity, making it inefficient for large arrays.',
  expectedOutputDescription: 'After completing all passes, the array is sorted in ascending order. For example, [5, 1, 4, 2] becomes [1, 2, 4, 5]. Each pass reduces the unsorted portion by one element.',
  algorithmType: 'sort',
  category: 'transform',
  starterCode: `arr = [5, 1, 4, 2];
i = 0;

while (i < arr.length - 1) {
    j = 0;
    while (j < arr.length - 1 - i) {
        if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        }
        j = j + 1;
    }
    i = i + 1;
}`,
  initialBindings: {
    arr: [5, 1, 4, 2],
    i: 0,
    j: 0,
  },
  watchedVariables: ['i', 'j'],
  pointerVariables: ['i', 'j'],
  primaryStructure: 'array',
  explanationMap: {
    COMPARE: 'Bubble sort compares adjacent values and keeps the larger one moving rightward.',
    SWAP: 'A swap corrects one out-of-order adjacent pair.',
    MOVE_POINTER: 'The inner pointer advances through the current unsorted prefix.',
  },
};