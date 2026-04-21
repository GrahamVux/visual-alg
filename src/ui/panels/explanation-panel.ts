export interface PanelRefs {
  root: HTMLElement;
  body: HTMLDivElement;
  descriptionBox: HTMLDivElement;
  exampleBox: HTMLDivElement;
}

export function createExplanationPanel(): PanelRefs {
  const root = document.createElement('section');
  root.className = 'panel';
  root.innerHTML = `
    <div class="panel-header">
      <h2>Explanation</h2>
      <span class="panel-tag">Teaching guidance</span>
    </div>
  `;

  const body = document.createElement('div');
  body.className = 'panel-body explanation-copy';

  // Description Box
  const descriptionBox = document.createElement('div');
  descriptionBox.className = 'explanation-box description-box';
  descriptionBox.innerHTML = `
    <h3>Algorithm Overview</h3>
    <div class="box-content"></div>
  `;

  // Example Box
  const exampleBox = document.createElement('div');
  exampleBox.className = 'explanation-box example-box';
  exampleBox.innerHTML = `
    <h3>Example</h3>
    <div class="box-content"></div>
  `;

  body.append(descriptionBox, exampleBox);
  root.append(body);
  return { root, body, descriptionBox, exampleBox };
}