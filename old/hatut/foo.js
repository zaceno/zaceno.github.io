let n = 112
var fs = require('fs')
var text = fs.readFileSync('./titles', 'utf-8')
const master = {}
text.split('\n').forEach(line => {
    const [title, author] = line.split(', ')
    const id = '' + n
    n++
    master[id] = { title, author }
})
const perword = {}
Object.keys(master).forEach(id => {
    const item = { ...master[id] }
    const words = item.title.split(' ')
    words.forEach(word => {
        word = word.toLowerCase()
        perword[word] = perword[word] || {}
        perword[word][id] = item
    })
})
Object.keys(perword).forEach(word => {
    fs.writeFileSync(`./${word}.json`, JSON.stringify(perword[word]), 'utf-8')
})
