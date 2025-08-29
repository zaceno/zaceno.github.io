export default (_, content) => ({
  init: false,
  view: showing => (
    <div class="content-demo">
      <p>
        <button onclick={showing => !showing}>
          {showing ? "Hide" : "Show"}
        </button>
      </p>
      {showing && content}
    </div>
  ),
})
