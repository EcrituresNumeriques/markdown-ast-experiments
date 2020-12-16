const fs = require('fs')
const util = require('util')
const unified = require('unified')
const markdown = require('remark-parse')

const markdownFile = 'short.md'
const tree = unified().use(markdown).parse(fs.readFileSync(markdownFile, 'utf8'))

function prunePosition(obj) {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] == "object") {
        if (property === 'position') {
          delete obj[property]
        } else {
          prunePosition(obj[property])
        }
      }
    }
  }
}
prunePosition(tree)

fs.writeFileSync('mdast.json', JSON.stringify(tree, null, '  '), 'utf8')
fs.writeFileSync('pandoc-ast.json', JSON.stringify(JSON.parse(fs.readFileSync('pandoc-ast.json', 'utf8')), null, '  '), 'utf8')

/*
console.log(util.inspect(tree, {showHidden: false, depth: null}))
console.log('')
console.log('')
console.log('')
console.log(util.inspect(JSON.parse(fs.readFileSync('pandoc-ast.json', 'utf8')), {showHidden: false, depth: null}))
*/
