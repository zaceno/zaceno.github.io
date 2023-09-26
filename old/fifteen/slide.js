const updateAll = () => {
  const elems = document.querySelectorAll('[data-tx-slide]')
  for (let e of elems) e.$tx_track()
}
window.addEventListener('scroll', updateAll, true)
window.addEventListener('resize', updateAll)

export default (transitionstr, vnode) => {
    let _elem
    Object.defineProperty(vnode, 'node', {
      get: () => _elem,
      set: (elem) => {
        _elem = elem
        if (!elem.$tx_track) {
          elem.setAttribute('data-tx-slide', 'data-tx-slide')
          elem.$tx_track = () =>  elem.$tx_pos = elem.getBoundingClientRect()
          requestAnimationFrame(() => elem.$tx_track())
        } else {
          queueMicrotask(() => {
            const {left, top} = elem.$tx_pos
            elem.$tx_track()
            const dx = left - elem.$tx_pos.left
            const dy = top - elem.$tx_pos.top
            if (!dx && !dy) return
            elem.style.transform = `translate(${dx}px, ${dy}px)`
            requestAnimationFrame(() => {
              elem.style.transition = transitionstr
              elem.style.transform = 'translate(0,0)'
              elem.addEventListener('transitionend', ()=> {
                elem.style.transform = null
                elem.style.transition = null
              })
            })
          })
        }
      }
    })
    return vnode
  }
  
  

