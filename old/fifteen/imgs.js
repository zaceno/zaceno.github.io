const IMG_SRC = './rose.jpg'
const PART_SIZE = 60
const PARTS = 4
const FULL_SIZE = PART_SIZE * PARTS

const loadImages = (dispatch, action) => {
  console.log('LOADING')
  let imageUrls = []
  let maincanvas = document.createElement('canvas')
  maincanvas.width = FULL_SIZE
  maincanvas.height = FULL_SIZE
  let mctx = maincanvas.getContext('2d')
  let partcanvas = document.createElement('canvas')
  partcanvas.width = PART_SIZE
  partcanvas.height = PART_SIZE
  let pctx = partcanvas.getContext('2d')
  const fullImage = new Image(FULL_SIZE, FULL_SIZE)
  fullImage.src = IMG_SRC
  fullImage.onload = () => {
    mctx.drawImage(fullImage, 0, 0)
    for (let row = 0; row < PARTS; row++) {
      for (let col = 0; col < PARTS; col++) {
        let data = mctx.getImageData(
          col * PART_SIZE,
          row * PART_SIZE,
          PART_SIZE,
          PART_SIZE
        )
        pctx.putImageData(data, 0, 0)
        let part = partcanvas.toDataURL()
        imageUrls.push(part)
      }
    }
    dispatch(action, imageUrls)
  }
}

export default action => [loadImages, action]