const NumberOfVirtualDOMComponentsSlider = ({ onChange }) => {
  return (
  <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6">
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        <details>
          <summary># of Virtual DOM Components</summary>
          <small>
            This is the number of components in the Virtual DOM tree per render.
            <br />
            <br />
            Example
            <br />
            <pre>
              {`<Component>
  <Component>
    <Component>
      ...
       ...
        ...<App />
    </Component>
  </Component>
</Component>`}
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
            max="1000"
            step="10"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <span className="ml-4">1,000</span>
        </div>
        <span id="vdomNodesCount" className="text-sm ml-[100px] text-gray-500">
          1
        </span>
      </div>
    </div>
  </div>
);
  }

export { NumberOfVirtualDOMComponentsSlider };
