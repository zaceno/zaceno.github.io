import {app} from 'https://cdn.skypack.dev/hyperapp'
import html from 'https://cdn.skypack.dev/hyperlit'
import slide from './slide.js'
import loadImages from './imgs.js'
import wireSquares from './squares.js'

const squareModel = wireSquares({
  get: state => state.squares,
  set: (state, squares) => ({...state, squares})
})

app({
  node: document.getElementById('app'),
  init: [
    {images: null},
    [d => d(squareModel.Init)],
    loadImages((state, images) => ({...state, images}))
  ],
  view: state => !state.images ? html`<main />` : html`
    <main class="fifteen-puzzle">
      <div class="board">
        ${squareModel.map(state, ({number, movable}) => slide('0.3s', html`
          <img
            key="square-${number}"
            class=${{movable, square: number > 0, blank: !number}}
            ontouchstart=${[squareModel.Move, number]}
            onmousedown=${[squareModel.Move, number]}
            src=${number > 0 ? state.images[number-1] : '#'}
          />
        `))}
        </div>
      <button onclick=${squareModel.Shuffle}>${'\u267B'}</button>
    </main>`
})