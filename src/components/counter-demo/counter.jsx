import "./counter.css"

export default ({ startValue }) => ({
  init: startValue,
  view: counter => (
    <div class="counter-demo">
      <h1>{counter}</h1>
      <button onclick={x => x - 1}> - </button>
      <button onclick={x => x + 1}> + </button>
    </div>
  ),
})
