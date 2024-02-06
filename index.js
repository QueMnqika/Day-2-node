let fs = require('fs')
let path = require('path')
let fileName = path.join(__dirname, './data/dataUn.txt')


function writeFromFile(content) {
    try {
        fs.writeFile(fileName, content, (err) => {
            if (!err) {
                console.log('Saved');
            }
        })
    } catch (e) {
        console.log('error when writing');
    }   
}


function readFromFile() {
    fs.readFile(file, Name, 'utf8', (err, data) => {
        if (!err) {
            console.log(data);
        }
    })
}

function AppendToFile(content) {
    try {
        fs.appendFile(fileName, content, (err) => {
            if (!err) {
                console.log('Data is modified');
            }
        })
    } catch (e) {
        console.log('Issue appending your data to file');
    }
}

writeFromFile('First content')
// writeFile('Second content')
// writeFile('First content')