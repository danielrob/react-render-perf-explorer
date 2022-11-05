const CallbackCountRangeSlider = ({ onChange }) => (
  <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6">
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        <details>
          <summary># of Callback Functions Generated Per Render</summary>
          <small>
            This is the number of callbacks that will be generated whenever the app re-renders as a
            result of a top level state change as a result of any of the triggers on the left pane
            which setState at the top level of the app. As it get's large enough, you may notice a
            slowdown in how fast typing is. <br />
            <br />
            Example
            <br />
            <pre>
              {`const callbacks = [];
for (let i = 0; i < callbackCount; i++) {
callbacks.push(() => {
console.log(\`Callback \${i}\`);
});
}
return callbacks;`}
            </pre>
          </small>
        </details>
      </label>
      <small>(Small Scale)</small>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="mr-4">1</span>
          <input
            data-input-scale="small"
            onChange={onChange}
            type="range"
            min="1"
            max="1000"
            step="1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <span className="ml-4">1,000</span>
        </div>
        <span id="callbackCount" className="text-sm ml-[100px] text-gray-500">
          1
        </span>
      </div>
    </div>
    <div className="mt-7">
      <small>(Big Scale)</small>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="mr-4">1</span>
          <input
            onChange={onChange}
            data-input-scale="large"
            type="range"
            min="1"
            max="1000000"
            step="10"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <span className="ml-4">1,000,000</span>
        </div>
      </div>
    </div>
  </div>
);

export { CallbackCountRangeSlider };
