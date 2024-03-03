import "./toggle-slot-demo.css"

export default (props, content) => ({
  init: false,
  view: showing => (
    <div class="toggle-slot-demo" style={{ outline: "1px #ffffff33 solid" }}>
      <button onclick={showing => !showing}>{showing ? "Hide" : "Show"}</button>
      {showing && content}
      {props.footer}
    </div>
  ),
})
