import "./style.css"
import "webcomponent-transition-group"

const INDEXES = [0, 1, 2, 3]

const GoTo = (state, current) => ({
  ...state,
  current,
  direction: current > state.current ? "right" : "left",
})

const GoLeft = state => ({
  ...state,
  direction: "left",
  current: state.current == 0 ? 3 : state.current - 1,
})

const GoRight = state => ({
  ...state,
  direction: "right",
  current: state.current == 3 ? 0 : state.current + 1,
})

const ShowControls = state => ({ ...state, controls: true })
const HideControls = state => ({ ...state, controls: false })

const Slide = ({ index }, slide) => {
  return {
    ...slide,
    key: "slide" + index,
    props: {
      ...slide.props,
      style: { display: "block", width: "100%", height: "100%" },
    },
  }
}

export default props => ({
  init: { current: 0, controls: false, direction: "left" },
  view: ({ current, controls, direction }) => (
    <div
      class="slideshow"
      onmouseover={ShowControls}
      onmouseleave={HideControls}
    >
      <div class="slideshow__screen">
        <transition-group
          entry={"slideshow--entry-" + direction}
          exit={"slideshow--exit-" + direction}
        >
          <Slide index={current}>{props["slide" + current]}</Slide>
        </transition-group>
      </div>
      <div
        class={{
          slideshow__controls: true,
          "slideshow__controls--showing": controls,
        }}
      >
        <button class="slideshow__go-left" onclick={GoLeft}>
          {"\u00AB"}
        </button>
        <button class="slideshow__go-right" onclick={GoRight}>
          {"\u00BB"}
        </button>
        <menu class="slideshow__nav-menu">
          {INDEXES.map(i => (
            <li
              class={[
                "slideshow__go-to",
                { "slideshow__go-to--current": i === current },
              ]}
            >
              <button onclick={[GoTo, i]} />
            </li>
          ))}
        </menu>
      </div>
    </div>
  ),
})
