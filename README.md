# custom-datastore
A database system application. House the database collection in a customized datastore in JSON format. It accepts inputs from the user via the command-line argument, parse it, and process it by either generating a database in the datastore, removing, or retrieving a particular datum or set of data.
## Table of Contents
## Features
* Add a datum to the database
* Read a datum from the database
* Read all data from the database
* Remove a datum from the database
* Guide to usage
## Getting started
You can fork this repository, then clone it to your local machine and open it in your preferred editor.

Run `npm install` to install the dependencies.
## Usage
After the sucessful installation from the previous section, head on to the terminal and navigate to the root directory of the file you cloned. Then you can proceed to the usage below. Note that if there is space inbetween the value of the flag, you will need to wrap it in quote. Wrapping in single quote will fail on windows, but not on linux or OSX. So ensure you wrap with double quote when using windows. Using any of the command in each section below will work
###  Adding a datum to the database
`node app.js add --title title-of-data --body body-of-data`

`node app.js add --title "title of data" --body "body of data"`

`node app.js add --title=title-of-data --body=body-of-data`

`node app.js add --title="title of data" --body="body of data"`
### Reading a datum from the database
`node app.js read --title title-of-data`

`node app.js read --title "title of data"`

`node app.js read --title=title-of-data`

`node app.js read --title="title of data"`
### Reading all data from the database
`node app.js list`
### Removing a datum from the database
`node app.js remove --title title-of-data`

`node app.js remove --title "title of data"`

`node app.js remove --title=title-of-data`

`node app.js remove --title="title of data"`
### Guide
For general guidance including the available commands, and what each of the commands do, use the command:

`node app.js --help`

For guidance on the use of each command, including the option they take, use the command:

`node app.js [command] --help`
## Example
###  Adding a datum to the database
#### Success response
![dadd-success](https://user-images.githubusercontent.com/46408547/198370608-e4dffbbd-8e5d-4e6b-b9e1-b6e883a10a58.JPG)
#### Error response
This error occurs when you try to add a data with an existing title to the database

![dadd-error](https://user-images.githubusercontent.com/46408547/198370855-60551806-04d0-4913-862e-fdeac484820c.JPG)
### Reading a datum from the database
#### Success response
![dread-success](https://user-images.githubusercontent.com/46408547/198497577-5013e970-7629-4e30-b2ff-1134a7051b6d.JPG)
#### Error response
This error occurs when we try to read a datum that does not exist in the database.

Note that we first removed the Note data from the datastore behind the scene, to simulate an error. Then when we try to read it, we get the error below

![dread-error](https://user-images.githubusercontent.com/46408547/198497666-ee90cd85-afdf-4806-8ded-2090602b9f34.JPG)

