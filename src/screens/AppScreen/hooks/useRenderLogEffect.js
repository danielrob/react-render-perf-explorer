import { useEffect } from 'react';

import { formatNumber, pageLog } from 'utils';
import * as controls from 'singletons/controls';
import { WORK_TIMER } from 'singletons';

const useRenderLogEffect = () => {
  useEffect(() => {
    pageLog(
      `Creating ${formatNumber(controls.callbackCount.value)} callbacks with ${formatNumber(
        controls.variableAssignmentCount.value
      )} object key assignments and ${controls.recreateDOMNodesCheckbox.value ? 'recreating' : 'updating'} \n${formatNumber(
        controls.domNodesCount.value
      )} dom nodes after reconciling ${
        controls.vdomNodesCount.value
      } VDOM components took ${formatNumber(Date.now() - WORK_TIMER.start)}ms`
    );
  });
};

export { useRenderLogEffect };
