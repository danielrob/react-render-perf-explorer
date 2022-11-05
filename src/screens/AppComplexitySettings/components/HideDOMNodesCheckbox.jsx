const HideDOMNodesCheckbox = ({ onChange }) => (
  <div className="flex mt-4">
    <input className="w-5 h-5" type="checkbox" onChange={onChange} />
    <label className="pl-4 block mb-2 text-sm font-medium text-gray-900">
      <details>
        <summary>Hide DOM nodes?</summary>

        <small>
          If checked, the DOM Nodes will still be updated in memory, but no browser paint will be required.
          <br />
          <br />
          Example
          <br />
          <pre>{`<div style={{ visibility: visible ? 'visible': 'hidden' }}>...domNodes</div>`}</pre>
        </small>
      </details>
    </label>
  </div>
);

export { HideDOMNodesCheckbox };
