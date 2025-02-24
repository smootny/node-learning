const {readFile, writeFile} = require('fs').promises

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/sebekawaituje.txt', `To jest plik stworzony przez Sebka ${first}, ${second}`, {flag: 'a'}

        ) 
        console.log(first, second)
    }  catch (error) {
        console.log(error)
    }
}

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))


// readFile('./content/first.txt', 'utf8', (err, data) => {
//     if (err) {
//         return 
//     } else {
//         console.log(data)
//     }
// })

// const start = async() => {
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first)
//         console.log(second)
//     }
// catch  (error){
//     console.log(error)
// }

// }

start()