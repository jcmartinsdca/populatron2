function csvReadFile() {
    const fs = require('fs')

    const fileData = fs.readFileSync('./data/worldcitiespop.csv.test', 'utf-8')
    //console.log(fileData)

    const lines = fileData.split('\n')
    console.log(lines)
    return(lines)
}

module.exports = csvReadFile
    