const RecreateDOMNodesCheckbox = ({ onChange }) => (
  <div className="flex mt-4">
    <input className="w-5 h-5" type="checkbox" onChange={onChange} />
    <label className="pl-4 block mb-2 text-sm font-medium text-gray-900">
      <details>
        <summary>Recreate DOM nodes instead of updating?</summary>

        <small>
          If checked, the key on the DOM Nodes will be changed each render, causing the DOM nodes to
          be destroyed and recreated instead of updated. This isn't likely to happen in most apps,
          it's more of an instructive example.
          <br />
          <br />
          Example
          <br />
          <pre>{`<button key={RANDOM_VALUES[isOddRender][index]}>
  {RANDOM_VALUES[isOddRender][index]}
</button>

vs

<button key={index}>
  {RANDOM_VALUES[isOddRender][index]}
</button>
`}</pre>
<br />
  Note: The first re-render after you disable this will cost extra since the keys still change to the new approach.
        </small>
      </details>
    </label>
  </div>
);

export { RecreateDOMNodesCheckbox };
