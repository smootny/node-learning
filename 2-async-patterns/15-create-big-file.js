const { writeFileSync } = require('fs')


    for(i = 0; i < 1000; i++) {
        writeFileSync('./content/big.txt',
        `Hello this is ${i}\n`,
        {flag : 'a'})
    }

