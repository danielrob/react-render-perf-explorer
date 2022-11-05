import { formatNumber } from 'utils';

const callbackCount = {
  value: 1,
  id: 'callbackCount',
  onChange: (e) => {
    callbackCount.value = Number(e.target.value);
    document.getElementById(callbackCount.id).innerText = formatNumber(e.target.value);

    if (e.target.dataset.inputScale === "small") {
      document.querySelector('[data-input-scale="large"]').value = e.target.value;
    }
    if (e.target.dataset.inputScale === "large") {
      document.querySelector('[data-input-scale="small"]').value = e.target.value;
    }
  },
};

const variableAssignmentCount = {
  value: 1,
  id: 'variableAssignmentCount',
  onChange: (e) => {
    variableAssignmentCount.value = Number(e.target.value);
    document.getElementById(variableAssignmentCount.id).innerText = formatNumber(e.target.value);
  },
};

const domNodesCount = {
  value: 1,
  id: 'domNodesCount',
  onChange: (e) => {
    domNodesCount.value = Number(e.target.value);
    document.getElementById(domNodesCount.id).innerText = formatNumber(e.target.value);
  },
};

const vdomNodesCount = {
  value: 1,
  id: 'vdomNodesCount',
  onChange: (e) => {
    vdomNodesCount.value = Number(e.target.value);
    document.getElementById(vdomNodesCount.id).innerText = formatNumber(e.target.value);
  },
};

const recreateDOMNodesCheckbox = {
  value: false,
  onChange: (e) => {
    recreateDOMNodesCheckbox.value = !recreateDOMNodesCheckbox.value;
  },
};

const hideDOMNodesCheckbox = {
  value: false,
  onChange: (e) => {
    hideDOMNodesCheckbox.value = !hideDOMNodesCheckbox.value;
    document.querySelector('#DOM_NODES_DISPLAY').style.visibility = hideDOMNodesCheckbox.value ? 'hidden' : 'visible';
  },
};

export { callbackCount, variableAssignmentCount, domNodesCount, vdomNodesCount, recreateDOMNodesCheckbox, hideDOMNodesCheckbox };
