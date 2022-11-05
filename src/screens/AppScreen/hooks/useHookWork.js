import { useCallbackGenerationWork } from './useCallbackGenerationWork.js';
import { WORK_TIMER } from 'singletons';

function useHookWork({ setInput }) {
  const callbacks = useCallbackGenerationWork();

  const onInputChange = (e) => {
    WORK_TIMER.start = Date.now();
    setInput(e.target.value);

    // If controls.performCallbackWork.current
    // callbacks.forEach((callback) => callback());
  };

  return {
    callbacks,
    onInputChange,
  };
}

export { useHookWork };
