import "webcomponent-transition-group"
import "./color-boxes.css"

if (!globalThis.requestAnimationFrame) {
  globalThis.requestAnimationFrame = () => {}
}

const INITIAL_COLORS = [
  "--red",
  "--orange",
  "--yellow",
  "--green",
  "--blue",
  "--purple",
  "--pink",
]

function ColoredBoxes({ colors, resetting }) {
  const boxes = colors.map(color => (
    <div
      key={color}
      class="box"
      style={{ backgroundColor: `var(${color})` }}
      onclick={[Remove, color]}
    />
  ))
  if (resetting) return boxes
  return (
    <transition-group slide="slide-transition" exit="poof">
      {boxes}
    </transition-group>
  )
}

const init = () => [
  {
    colors: [...INITIAL_COLORS],
    active: false,
  },
  d => {
    requestAnimationFrame(() => {
      d(state => ({ ...state, active: true }))
    })
  },
]

const Remove = (state, color) => {
  const colors = state.colors.filter(c => c !== color)
  return { ...state, colors }
}

const view = state => (
  <div class="colored-boxes-demo">
    <button class="reset" onclick={init}>
      {"\u21BA"}
    </button>
    <ColoredBoxes colors={state.colors} resetting={!state.active} />
  </div>
)

export default () => ({ init, view })
