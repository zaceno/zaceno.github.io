import { inventory } from "./inventory"

export default () =>
  inventory(state => (
    <div class="synced-demo__inventory-report">
      <p>Complete inventory:</p>
      <ul>
        <li>
          <span>Apples:</span> {state.inventory.apples}
        </li>
        <li>
          <span>Bananas:</span> {state.inventory.bananas}
        </li>
        <li>
          <span>Oranges:</span> {state.inventory.oranges}
        </li>
      </ul>
    </div>
  ))
