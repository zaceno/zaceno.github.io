import loadImages from "./imgs.js"
import * as Squares from "./squares.js"
import "./main.css"
import "webcomponent-transition-group"

const touchEvent = (action, payload) => {
  const fn = (_, ev) => {
    ev.stopPropagation()
    ev.preventDefault()
    return [action, payload]
  }
  return {
    ontouchstart: fn,
    onmousedown: fn,
  }
}

const Move = (state, number) => ({
  ...state,
  squares: Squares.move(state.squares, number),
})

const Shuffle = state => ({ ...state, squares: Squares.shuffle(state.squares) })

const Reset = state => ({ ...state, squares: Squares.initial })

export default ({ imageUrl }) => ({
  init: [
    { images: null, squares: Squares.initial },
    dispatch => {
      const callback = images => {
        dispatch(state => ({ ...state, images }))
      }
      loadImages(imageUrl, callback)
    },
  ],
  view: state => {
    if (!state.images) return <div />
    const moves = Squares.getMoves(state.squares)
    return (
      <div class="fifteen">
        <transition-group class="fifteen__board" slide="fifteen__square--slide">
          {state.squares.map(number => (
            <img
              key={"square-" + number}
              {...touchEvent(Move, number)}
              class={{
                fifteen__square: number > 0,
                fifteen__blank: !number,
                "fifteen__square--movable": moves.includes(number),
              }}
              src={number > 0 ? state.images[number - 1] : "#"}
            />
          ))}
        </transition-group>
        <div class="fifteen__buttons">
          <button onclick={Reset}>Reset</button>
          <button onclick={Shuffle}>Shuffle</button>
        </div>
      </div>
    )
  },
})
