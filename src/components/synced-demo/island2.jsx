import "./style.css"
import master from "./master.js"

const setName = (state, ev) => ({
  ...state,
  name: ev.target.value,
})

export default () =>
  master(state => (
    <div class="synced-demo">
      <p>
        I hear you like <span class="data">{state.fruit}</span>! What's your
        name? &nbsp;
        <input type="text" value={state.name} oninput={setName} />
      </p>
    </div>
  ))
