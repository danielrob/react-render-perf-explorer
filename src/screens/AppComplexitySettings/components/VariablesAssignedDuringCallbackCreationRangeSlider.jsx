const VariablesAssignedDuringCallbackCreationRangeSlider = ({ onChange }) => (
  <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6">
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        <details>
          <summary># of Object Key Assignments During Callback Creation</summary>
          <small>
            This is the number of object key assignments required to generate each callback <br />
            <br />
            Example
            <br />
            <pre>
              {`function getCallback() {
  const x = {};
  for (let i = 0; i < assignments; i++) {
      x[i] = i + 4;
  }
  return () => {
}`}
            </pre>
          </small>
        </details>
      </label>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="mr-4">1</span>
          <input
            onChange={onChange}
            type="range"
            min="1"
            max="10000"
            step="1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <span className="ml-4">10,000</span>
        </div>
        <span id="variableAssignmentCount" className="text-sm ml-[100px] text-gray-500">
          1
        </span>
      </div>
    </div>
  </div>
);

export { VariablesAssignedDuringCallbackCreationRangeSlider };
