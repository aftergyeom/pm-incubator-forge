import './App.css'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { CalculationExample } from './math_operation/CalculationExample'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { FristProblem } from './assets/problem/FristProblem'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'

function App() {

  return (
    <>
      <div>
        <CalculationExample/>
        <VariableAndDataTypes/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
        <FristProblem/>
        <ControlFlowSwitch/>
      </div>
    </>
  )
}

export default App 