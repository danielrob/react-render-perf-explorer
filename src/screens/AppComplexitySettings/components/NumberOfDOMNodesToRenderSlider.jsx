const NumberOfDOMNodesToRenderSlider = ({ onChange }) => (
  <div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        <details>
          <summary># of DOM Nodes Updated Per Render<sup>*</sup></summary>
          <small>
            These DOM Nodes are displayed on the left. Their text value is updated each render to either it's odd value, or it's even value. The values themselves are pregenerated when the app is initialised, not made on each render. Easter egg: If you're creating a sufficiemt number of callbacks, these are assigned to the onChange of each element - click to see.<br /><br /><em><sup>*</sup>Note:</em> The first re-render after you change this
            it will cost extra since you need to add/remove the elements from the DOM instead of
            just updating each elements content.
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
            step="10"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <span className="ml-4">10,000</span>
        </div>
        <span id="domNodesCount" className="text-sm ml-[100px] text-gray-500">
          1
        </span>
      </div>
    </div>
  </div>
);

export { NumberOfDOMNodesToRenderSlider }
