import "./style.css"
import "webcomponent-transition-group"

const SLIDES = {
  unexamined: <p>The unexamined life is not worth living for a human being</p>,
  courage: (
    <p>Courage is knowing what not to fear, and wisdom is knowing why</p>
  ),
  educated: (
    <p>
      It is the mark of an educated mind to entertain a thought without
      accepting it
    </p>
  ),
  strength: (
    <p>
      You have power over your mind, not outside events; realize this and find
      strength
    </p>
  ),
}

const SLIDE_ORDER = ["unexamined", "courage", "educated", "strength"]

const GoTo = (state, current) => ({
  ...state,
  current,
  direction: current > state.current ? "right" : "left",
})

const GoLeft = state => ({
  ...state,
  direction: "left",
  current: (state.current == 0 ? SLIDE_ORDER.length : state.current) - 1,
})

const GoRight = state => ({
  ...state,
  direction: "right",
  current: state.current == SLIDE_ORDER.length - 1 ? 0 : state.current + 1,
})

const ShowControls = state => ({ ...state, controls: true })
const HideControls = state => ({ ...state, controls: false })

const Slide = ({ key }, content) => {
  const slideID = "slide-" + key
  return (
    <div class="slide" key={slideID} id={slideID}>
      {content}
    </div>
  )
}

export function SlideshowScreen({ slideID, slideContent, direction }) {
  return (
    <div class="slideshow__screen">
      <transition-group
        entry={"slideshow--entry-" + direction}
        exit={"slideshow--exit-" + direction}
      >
        <Slide key={slideID}>{slideContent}</Slide>
      </transition-group>
    </div>
  )
}

function SlideshowNavigator({ current }) {
  return (
    <menu class="slideshow__nav-menu">
      {SLIDE_ORDER.map((_, i) => (
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
  )
}
function SlideshowControls({ showing, current }) {
  return (
    <div
      class={{
        slideshow__controls: true,
        "slideshow__controls--showing": showing,
      }}
    >
      <button class="slideshow__go-left" onclick={GoLeft}>
        {"\u00AB"}
      </button>
      <button class="slideshow__go-right" onclick={GoRight}>
        {"\u00BB"}
      </button>
      <SlideshowNavigator current={current} />
    </div>
  )
}

export default props => ({
  init: { current: 0, controls: false, direction: "left" },
  view: ({ current, controls, direction }) => (
    <div
      class="slideshow"
      onmouseover={ShowControls}
      onmouseleave={HideControls}
    >
      <SlideshowScreen
        direction={direction}
        slideID={SLIDE_ORDER[current]}
        slideContent={SLIDES[SLIDE_ORDER[current]]}
      />
      <SlideshowControls showing={controls} current={current} />
    </div>
  ),
})
