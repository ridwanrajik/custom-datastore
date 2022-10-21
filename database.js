const fs = require('fs')
const chalk = require('chalk')

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
        console.log(chalk.green.inverse('New data added!'))
    } else {
        console.log(chalk.green.inverse('datum title taken!'))        
    }
}

const removeDatum = function (title) {
    const data = fetchData()
    const dataToKeep = data.filter(function (datum) {
        return datum.title !== title
    })

    if (data.length > dataToKeep.length) {
        console.log(chalk.green.inverse('Datum removed!'))
        saveData(dataToKeep)
    } else {
        console.log(chalk.red.inverse('No data found!'))
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
    addDatum,
    removeDatum
}