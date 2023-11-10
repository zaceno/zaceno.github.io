const SHUFFLE_LENGTH = 3000

export const initial = [...Array(15).keys()].map(x => x + 1).concat([0])

const swap = (squares, i, j) => {
  let news = [...squares]
  news[i] = squares[j]
  news[j] = squares[i]
  return news
}

const index2Coords = index => [index % 4, Math.floor(index / 4)]

const coords2Index = (col, row) => row * 4 + col

const relIndex = (index, dx, dy) => {
  let [ox, oy] = index2Coords(index)
  let [nx, ny] = [ox + dx, oy + dy]
  return coords2Index(nx, ny)
}

export const move = (squares, square) => {
  let blankIndex = squares.indexOf(0)
  const [blankCol, blankRow] = index2Coords(blankIndex)
  const squareIndex = squares.indexOf(square)
  const [squareCol, squareRow] = index2Coords(squareIndex)
  const dx = blankCol < squareCol ? 1 : blankCol > squareCol ? -1 : 0
  const dy = blankRow < squareRow ? 1 : blankRow > squareRow ? -1 : 0
  if (!!dx && !!dy) return squares
  while (squareIndex !== blankIndex) {
    let nextIndex = relIndex(blankIndex, dx, dy)
    squares = swap(squares, blankIndex, nextIndex)
    blankIndex = nextIndex
  }
  return squares
}

export const getMoves = squares => {
  let i = squares.indexOf(0)
  let [col, row] = index2Coords(i)
  return [
    0 + col,
    4 + col,
    8 + col,
    12 + col,
    row * 4,
    row * 4 + 1,
    row * 4 + 2,
    row * 4 + 3,
  ]
    .filter(x => x !== i)
    .map(x => squares[x])
}

export const shuffle = squares => {
  for (var i = 0; i < SHUFFLE_LENGTH; i++) {
    let moves = getMoves(squares)
    let square = moves[Math.floor(Math.random() * moves.length)]
    squares = move(squares, square)
  }
  return squares
}

export const map = (squares, fn) => {
  const moves = getMoves(squares)
  return squares.map(number =>
    fn({
      number,
      movable: moves.includes(number),
    }),
  )
}
