export default props => ({
  init: props.startingCount || 0,
  view: x => (
    <div class="counter">
      <h1>{x}</h1>
      <button onclick={x => x - 1}>-</button>
      <button onclick={x => x + 1}>+</button>
    </div>
  ),
})
