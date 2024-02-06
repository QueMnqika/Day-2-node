let fs = require('fs')
let path = require('path')
let fileName = path.join(__dirname, './data/data.txt')

function writeFile(content) {
    try {
        fs.writeFile(fileName, content, err => {
            if (!err) {
                console.log('Saved');
            }
        })
    } catch (e) {
        console.log('error when writing');
    }   
}