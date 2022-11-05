import { useEffect } from 'react';
import { RANDOM_VALUE_MAP } from 'constants';
import {
  domNodesCount,
  recreateDOMNodesCheckbox,
  hideDOMNodesCheckbox,
  vdomNodesCount,
} from 'singletons';

let render_key = true;
let previousCount = vdomNodesCount.value;

const AppScreenContent = ({ input, onInputChange, rerender, callbacks }) => {
  render_key = !render_key;

  useEffect(() => {
    if (vdomNodesCount.value !== previousCount) {
      document.getElementById('vdomNodesCountInput').focus();
      previousCount = vdomNodesCount.value;
    }
  });

  return (
    <>
      <header className="mb-8">
        <h1 className="text-2xl mb-2 font-bold">App</h1>
        <p>
          Trigger re-renders by interacting with the App. Then change the settings on the right to
          see how it affects the app performance.
        </p>
      </header>
      <h2 className="text-l font-bold mb-4">App Triggers</h2>
      <article>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Type to re-render the app
          <input
            id="vdomNodesCountInput"
            value={input}
            onChange={onInputChange}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </label>
        <label className="block mt-8 mb-2 text-sm font-medium text-gray-900">
          Click to re-render the app
        </label>
        <button className="border-2 p-2 rounded-lg" onClick={rerender}>
          Click to re-render
        </button>
      </article>

      <h2 className="text-l font-bold mt-20">App Content</h2>
      <article>
        <h3>Dom nodes</h3>
        <div
          className="max-h-96 overflow-scroll"
          style={{ visibility: hideDOMNodesCheckbox.value ? 'hidden' : 'visible' }}
          id="DOM_NODES_DISPLAY"
        >
          {Array.from(Array(domNodesCount.value)).map((val, index) => (
            <button
              className="mr-1"
              onClick={callbacks[index]}
              key={recreateDOMNodesCheckbox.value ? RANDOM_VALUE_MAP[render_key][index] : index}
            >
              {RANDOM_VALUE_MAP[render_key][index]}
            </button>
          ))}
        </div>
      </article>
    </>
  );
};

export { AppScreenContent };
