export default (props, content) => ({
  init: false,
  view: showing => (
    <div class="toggle-slot-demo">
      <p>
        <button onclick={showing => !showing}>
          {showing ? "Hide" : "Show"}
        </button>
      </p>
      {showing && content}
      {props.footer}
    </div>
  ),
})
