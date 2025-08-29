import { inventory, type State, type Action } from "./inventory.ts"

const getValue = (state: State) => state.inventory[state.current]
const setValue: Action<number> = (state, nbr) => {
  return {
    ...state,
    inventory: {
      ...state.inventory,
      [state.current]: nbr,
    },
  }
}
const incr: Action = state => [setValue, getValue(state) + 1]
const decr: Action = state => [setValue, getValue(state) - 1]

export default () =>
  inventory(state => (
    <div class="synced-demo__count-product">
      <p>Count {state.current}:</p>
      <h1>{getValue(state)}</h1>
      <p>
        <button onclick={decr}> - </button>
        <button onclick={incr}> + </button>
      </p>
    </div>
  ))
