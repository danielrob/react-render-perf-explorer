import * as controls from 'singletons/controls';
import {
  CallbackCountRangeSlider,
  VariablesAssignedDuringCallbackCreationRangeSlider,
  NumberOfDOMNodesToRenderSlider,
  NumberOfVirtualDOMComponentsSlider,
  RecreateDOMNodesCheckbox,
  HideDOMNodesCheckbox,
} from './components';

const AppComplexitySettings = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">App Complexity Settings</h1>
      <p>Expand each item for more details. Trigger a re-render on the other side to see the effect of your settings. Yes, you can crash your chrome tab.</p>
      <NumberOfDOMNodesToRenderSlider onChange={controls.domNodesCount.onChange} />
      <RecreateDOMNodesCheckbox onChange={controls.recreateDOMNodesCheckbox.onChange} />
      <HideDOMNodesCheckbox onChange={controls.hideDOMNodesCheckbox.onChange} />
      <CallbackCountRangeSlider onChange={controls.callbackCount.onChange} />
      <VariablesAssignedDuringCallbackCreationRangeSlider
        onChange={controls.variableAssignmentCount.onChange}
      />
      <NumberOfVirtualDOMComponentsSlider onChange={controls.vdomNodesCount.onChange} />
      <pre id="page-log" />
    </>
  );
};

export { AppComplexitySettings };
