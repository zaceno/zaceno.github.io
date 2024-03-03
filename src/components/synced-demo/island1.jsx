import "./style.css"
import master from "./master.js"

const setFruit = (state, ev) => ({
  ...state,
  fruit: ev.target.value,
})

export default () =>
  master(state => (
    <div class="synced-demo">
      <p>
        Hello <span class="data">{state.name}</span>! What's your favorite
        fruit? &nbsp;
        <select onchange={setFruit}>
          <option selected={state.fruit === "apples"}>apples</option>
          <option selected={state.fruit === "oranges"}>oranges</option>
          <option selected={state.fruit === "bananas"}>bananas</option>
        </select>
      </p>
    </div>
  ))
