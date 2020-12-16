const fs = require('fs')
const util = require('util')
const unified = require('unified')
const markdown = require('remark-parse')

const tree = unified().use(markdown).parse(fs.readFileSync('input.md', 'utf8'))
fs.writeFileSync('mdast.json', JSON.stringify(tree, null, '  '), 'utf8')
fs.writeFileSync('pandoc-ast.json', JSON.stringify(JSON.parse(fs.readFileSync('pandoc-ast.json', 'utf8')), null, '  '), 'utf8')


console.log(util.inspect(tree, {showHidden: false, depth: null}))
console.log('')
console.log('')
console.log('')
console.log(util.inspect(JSON.parse(fs.readFileSync('pandoc-ast.json', 'utf8')), {showHidden: false, depth: null}))
