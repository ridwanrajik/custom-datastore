const fs = require('fs')
const chalk = require('chalk')

const addDatum = (title, body) => {
    const data = fetchData()
    const duplicateData = data.filter((datum) => datum.title === title)

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

const removeDatum = (title) => {
    const data = fetchData()
    const dataToKeep = data.filter((datum) => datum.title !== title)

    if (data.length > dataToKeep.length) {
        console.log(chalk.green.inverse('Datum removed!'))
        saveData(dataToKeep)
    } else {
        console.log(chalk.red.inverse('No data found!'))
    }    
}

const listData = () => {
    const data = fetchData()

    console.log(chalk.inverse('Your data'))

    data.forEach((datum) => {
        console.log(datum.title)
    })
}

const readDatum = (title) => {
    const data = fetchData()
    const datum = data.find((datum) => datum.title === title)

    if (datum) {
        console.log(chalk.inverse(datum.title))
        console.log(datum.body)
    } else {
        console.log(chalk.red.inverse('Datum not found!'))
    }
}


const saveData = (data) => {
    const databaseJSON = JSON.stringify(data, undefined, 2)
    fs.writeFileSync('database.json', databaseJSON)
}

const fetchData =  () => {
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
    removeDatum,
    listData,
    readDatum
}