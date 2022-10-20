const fs = require('fs')

const addDatum = function (title, body) {
    const data = fetchData()
    const duplicateData = data.filter(function (datum) {
        return datum.title === title
    })

    if (duplicateData.length === 0) {
        data.push({
            title: title,
            body: body
        })
        saveData(data)
        console.log('New data added!')
    } else {
        console.log('datum title taken!')
    }
}

const saveData = function (data) {
    const databaseJSON = JSON.stringify(data, undefined, 2)
    fs.writeFileSync('database.json', databaseJSON)
}

const fetchData = function () {
    try {
        const dataBuffer = fs.readFileSync('database.json')
        const databaseJSON = dataBuffer.toString()
        return JSON.parse(databaseJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addDatum
}