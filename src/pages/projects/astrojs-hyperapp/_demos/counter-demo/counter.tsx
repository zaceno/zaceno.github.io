import { type Action } from "hyperapp"
type State = { count: number }
type CounterAction<P = any> = Action<State, P>
const init = () => ({ count: 0 })
const incr: CounterAction = state => ({ ...state, count: state.count + 1 })
const decr: CounterAction = state => ({ ...state, count: state.count - 1 })
export default () => ({
  init,
  view: (state: State) => (
    <div class="counter-demo">
      <h1>{state.count}</h1>
      <button onclick={decr}> - </button>
      <button onclick={incr}> + </button>
    </div>
  ),
})
