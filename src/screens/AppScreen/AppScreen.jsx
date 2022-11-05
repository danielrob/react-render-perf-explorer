import { useState } from 'react';

import * as controls from 'singletons/controls';
import { useHookWork, useRerender, useRenderLogEffect } from './hooks';
import { AppScreenContent, VDOMWorkComponent } from './components';

const AppScreen = () => {
  const [input, setInput] = useState('');
  const rerender = useRerender();

  const { onInputChange, callbacks } = useHookWork({
    setInput,
  });

  useRenderLogEffect();

  return (
    <VDOMWorkComponent
      depth={controls.vdomNodesCount.value - 1}
      content={
        <AppScreenContent
          input={input}
          rerender={rerender}
          onInputChange={onInputChange}
          callbacks={callbacks}
        />
      }
    />
  );
};

export { AppScreen };
