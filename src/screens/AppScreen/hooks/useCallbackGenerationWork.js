import { pageLog } from 'utils';
import { callbackCount, variableAssignmentCount } from 'singletons';

function useCallbackGenerationWork() {
  const callbacks = [];
  for (let i = 0; i < callbackCount.value; i++) {
    const x = {};
    for (let index = 0; index < variableAssignmentCount.value; index++) {
      x[i] = index + 1;
    }

    callbacks.push(() => {
      pageLog(`Click callback ${i} (This isn't a re-render)`);
    });
  }
  return callbacks;
}

export { useCallbackGenerationWork };
