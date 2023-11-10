import "webcomponent-transition-group"
import "./style.css"

const keepAdding = dispatch =>
  setInterval(() => {
    dispatch(({ strings }) => ({
      strings: [...strings, ("" + Math.random()).slice(3, 10)].slice(-4),
    }))
  }, 2000)

export default () => ({
  init: { strings: [] },
  subscriptions: _ => [[keepAdding]],
  view: ({ strings }) => (
    <ul class="toasts">
      <transition-group entry="slide" exit="pop" slide="slide">
        {strings.map(str => (
          <li class="toast" key={str}>
            {str}
          </li>
        ))}
      </transition-group>
    </ul>
  ),
})
