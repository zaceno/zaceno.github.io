import { inventory, type Action, type State } from "./inventory.ts"

const setCurrent: Action<Event> = (state, event) => {
  const value = (event.target as HTMLSelectElement).value as State["current"]
  return { ...state, current: value }
}

export default () =>
  inventory((state: State) => (
    <div class="synced-demo__select-product">
      <p>Set which product to count:</p>
      <select value={state.current} oninput={setCurrent}>
        <option>apples</option>
        <option>bananas</option>
        <option>oranges</option>
      </select>
    </div>
  ))
