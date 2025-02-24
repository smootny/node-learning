const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
const three = readFileSync('./content/result-text.txt', 'utf-8')
console.log(three)

writeFileSync(
    './content/result-text.txt',
    `Here is the new file with old text: ${first}, ${second}`,
    {flag : 'a'}
)