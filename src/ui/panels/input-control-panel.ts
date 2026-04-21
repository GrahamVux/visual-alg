import type { LessonDefinition } from '../../lessons/lesson-types';

export interface InputControlPanelRefs {
  root: HTMLElement;
  arraySizeInput: HTMLInputElement;
  targetInput: HTMLInputElement;
  arrayValuesInput: HTMLTextAreaElement;
  randomButton: HTMLButtonElement;
  applyButton: HTMLButtonElement;
  currentOutputBox: HTMLDivElement;
}

export interface InputControlOptions {
  lesson: LessonDefinition;
  onApply: (config: {
    arraySize: number;
    target: number | null;
    arrayValues: number[];
    additionalParams: Record<string, number>;
  }) => void;
}

export function createInputControlPanel(options: InputControlOptions): InputControlPanelRefs {
  const root = document.createElement('div');
  root.className = 'input-control-panel';

  const title = document.createElement('h3');
  title.textContent = 'Configure Input';
  root.append(title);

  // LEFT SECTION: Input Controls and Output
  const leftSection = document.createElement('div');
  leftSection.className = 'input-panel-left';

  // Array Size Control
  const sizeGroup = document.createElement('div');
  sizeGroup.className = 'input-group';

  const sizeLabel = document.createElement('label');
  sizeLabel.textContent = 'Array Size:';
  const sizeInput = document.createElement('input');
  sizeInput.type = 'number';
  sizeInput.min = '1';
  sizeInput.max = '20';
  sizeInput.value = String(
    Array.isArray(options.lesson.initialBindings.arr)
      ? (options.lesson.initialBindings.arr as unknown[]).length
      : 10
  );
  sizeGroup.append(sizeLabel, sizeInput);
  leftSection.append(sizeGroup);

  // Target Control (for search algorithms)
  const targetGroup = document.createElement('div');
  targetGroup.className = 'input-group';

  const targetLabel = document.createElement('label');
  // Dynamically set label based on actual variable name
  const searchVarName = options.lesson.watchedVariables.includes('target') ? 'target' : null;
  if (searchVarName) {
    targetLabel.textContent = `${searchVarName.charAt(0).toUpperCase() + searchVarName.slice(1)} Value:`;
  }
  const targetInput = document.createElement('input');
  targetInput.type = 'number';
  targetInput.value = String(options.lesson.initialBindings[searchVarName as keyof typeof options.lesson.initialBindings] ?? '');
  targetInput.placeholder = 'Leave empty if not applicable';

  // Hide target input for non-search algorithms
  if (!searchVarName) {
    targetGroup.style.display = 'none';
  }

  targetGroup.append(targetLabel, targetInput);
  leftSection.append(targetGroup);

  // Additional configurable parameters
  const configurableParams = ['direction', 'mode', 'k'];
  const additionalInputs: Record<string, HTMLInputElement> = {};

  configurableParams.forEach(paramName => {
    if (options.lesson.watchedVariables.includes(paramName)) {
      const paramGroup = document.createElement('div');
      paramGroup.className = 'input-group';

      const paramLabel = document.createElement('label');
      let labelText = paramName.charAt(0).toUpperCase() + paramName.slice(1);

      // Customize labels for better UX
      if (paramName === 'direction') {
        if (options.lesson.id.includes('sort')) {
          labelText = 'Direction (1=ascending, -1=descending)';
        } else if (options.lesson.id.includes('rotate')) {
          labelText = 'Direction (0=left, 1=right)';
        } else {
          labelText = 'Direction';
        }
      } else if (paramName === 'mode') {
        labelText = 'Mode (1=largest, -1=smallest)';
      } else if (paramName === 'k') {
        labelText = 'Rotation Amount (k)';
      }

      paramLabel.textContent = `${labelText}:`;

      const paramInput = document.createElement('input');
      paramInput.type = 'number';
      paramInput.value = String(options.lesson.initialBindings[paramName as keyof typeof options.lesson.initialBindings] ?? '');

      paramGroup.append(paramLabel, paramInput);
      leftSection.append(paramGroup);

      additionalInputs[paramName] = paramInput;
    }
  });

  // Array Values Control
  const valuesGroup = document.createElement('div');
  valuesGroup.className = 'input-group';

  const valuesLabel = document.createElement('label');
  valuesLabel.textContent = 'Array Values (comma-separated):';
  const valuesInput = document.createElement('textarea');
  valuesInput.className = 'array-values-textarea';
  valuesInput.placeholder = 'e.g., 1, 3, 5, 7, 9';
  valuesInput.rows = 2;

  if (Array.isArray(options.lesson.initialBindings.arr)) {
    valuesInput.value = (options.lesson.initialBindings.arr as number[]).join(', ');
  }

  valuesGroup.append(valuesLabel, valuesInput);
  leftSection.append(valuesGroup);

  // Buttons Group
  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'input-button-group';

  const randomButton = document.createElement('button');
  randomButton.className = 'btn btn-secondary';
  randomButton.textContent = 'Generate Random';

  const applyButton = document.createElement('button');
  applyButton.className = 'btn btn-primary';
  applyButton.textContent = 'Apply Changes';

  buttonGroup.append(randomButton, applyButton);
  leftSection.append(buttonGroup);

  // Current Expected Output Box (below inputs)
  const currentOutputBox = document.createElement('div');
  currentOutputBox.className = 'output-info-box current-output';
  currentOutputBox.innerHTML = `
    <div class="output-box-header">Expected Output</div>
    <div class="output-box-content">
      <p>Configure your input values to see the expected output.</p>
    </div>
  `;

  leftSection.append(currentOutputBox);

  // Assemble grid - now leftSection contains both inputs and output
  root.append(leftSection);

  // Event Handlers
  randomButton.addEventListener('click', () => {
    const size = parseInt(sizeInput.value, 10) || 10;
    const randomValues = generateRandomArray(size);
    valuesInput.value = randomValues.join(', ');
  });

  applyButton.addEventListener('click', () => {
    const arraySize = parseInt(sizeInput.value, 10) || 10;
    const targetValue = targetInput.value ? parseInt(targetInput.value, 10) : null;
    const arrayValues = parseArrayInput(valuesInput.value, arraySize);

    if (arrayValues.length === 0) {
      alert('Invalid array values. Please enter comma-separated numbers.');
      return;
    }

    // Collect additional parameters
    const additionalParams: Record<string, number> = {};
    Object.keys(additionalInputs).forEach(paramName => {
      const input = additionalInputs[paramName];
      if (input && input.value) {
        additionalParams[paramName] = parseInt(input.value, 10);
      }
    });

    options.onApply({
      arraySize: arrayValues.length,
      target: targetValue,
      arrayValues,
      additionalParams,
    });
  });

  return {
    root,
    arraySizeInput: sizeInput,
    targetInput,
    arrayValuesInput: valuesInput,
    randomButton,
    applyButton,
    currentOutputBox,
  };
}

export function generateRandomArray(size: number, min = 1, max = 99): number[] {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

export function parseArrayInput(input: string, expectedSize?: number): number[] {
  if (!input.trim()) {
    return [];
  }

  const values = input
    .split(',')
    .map((s) => parseInt(s.trim(), 10))
    .filter((n) => !isNaN(n));

  if (expectedSize && values.length !== expectedSize) {
    console.warn(
      `Expected ${expectedSize} values, got ${values.length}. Using provided values.`
    );
  }

  return values;
}
