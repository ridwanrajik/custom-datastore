const fs = require('fs');
const chalk = require('chalk');

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

    if ( data.length == 0 ) {
        console.log(chalk.red.inverse('No data to fetch. Database is empty!'))
    } else {
        console.log(chalk.inverse('Your data'))
        data.forEach((datum) => {
            console.log(datum)
            // console.log(datum.title)
        })
    }
    
}

const generateDatastore = (datastore) => {
    const datastoreJSON = datastore + '.json'
    try {
        fs.unlink(fs.readFileSync(require.resolve("custom-datastore/dataCollection.json")), (err) => {
            // if (err) {
            //     throw err;
            // }
        })
    } catch (e) {
        
    }

    try{
        fs.writeFileSync(require.resolve("custom-datastore/dataCollection.json"), datastoreJSON)
        const databaseJSON = fs.readFileSync(require.resolve("custom-datastore/database.json"))
        fs.writeFileSync(datastoreJSON, databaseJSON)
        console.log(chalk.inverse.green('Success!'))
        console.log('Open '+ datastoreJSON +' file to view your data')
    } catch (e) {
        fs.writeFileSync(datastoreJSON, '')
        console.log('Done! Open'+ datastoreJSON +'file to view your data.')
        console.log('Note that your database is empty. You need to add data to the database')
    }
    
}

const readDatum = (title) => {
    const data = fetchData()
    const datum = data.find((datum) => datum.title === title)

    if (datum) {
        // console.log(chalk.inverse(datum.title))
        // console.log(datum.body)
        console.log(chalk.inverse('Your datum'))
        console.log(datum)
    } else {
        console.log(chalk.red.inverse('Datum not found!'))
    }
}


const saveData = (data) => {
    const databaseJSON = JSON.stringify(data, undefined, 2)
    fs.writeFileSync(require.resolve("custom-datastore/database.json"), databaseJSON)
    try {
        // fs.openSync(require.resolve("custom-datastore/dataCollection.json"), 'a');
        const datastoreBuffer = fs.readFileSync(require.resolve("custom-datastore/dataCollection.json"))
        const datastoreJSON = datastoreBuffer.toString()
        fs.writeFileSync(datastoreJSON, databaseJSON)
    } catch (error) {
        // console.log(error)
        // const datastoreJSON = ''
        console.log('Note; To view your database in file, run the following command: ')
        console.log('node <yourAppFile.js> generate --datastore=<yourPreferedName>')
    }
    
}

const fetchData =  () => {
    try {
        const dataBuffer = fs.readFileSync(require.resolve("custom-datastore/database.json"))
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
    readDatum,
    generateDatastore
}