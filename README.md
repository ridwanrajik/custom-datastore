<!-- vscode-markdown-toc -->
# custom-datastore 
![npm](https://img.shields.io/npm/v/custom-datastore) &nbsp;
![npm](https://img.shields.io/npm/dt/custom-datastore) &nbsp;
[![GitHub issues](https://img.shields.io/github/issues/ridwanrajik/custom-datastore)](https://github.com/ridwanrajik/custom-datastore/issues) &nbsp;
![GitHub User's stars](https://img.shields.io/github/stars/ridwanrajik) &nbsp;
![GitHub followers](https://img.shields.io/github/followers/ridwanrajik?style=social) &nbsp;
![Twitter Follow](https://img.shields.io/twitter/follow/RidwanRaji_K?style=social) &nbsp;
![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FRidwanRaji_K)

A database system application. House the database collection in a customized datastore in JSON format. It currently accepts inputs from the user via the command-line argument, parse it, and process it by either generating a database in the datastore, removing, or retrieving a particular datum or set of data.
## Table of content
* 1. [Features](#Features)
* 2. [Installation](#Installation)
* 3. [Usage](#Usage)
	* 3.1. [ Adding a datum to the database](#Addingadatumtothedatabase)
	* 3.2. [Reading a datum from the database](#Readingadatumfromthedatabase)
	* 3.3. [Reading all data from the database](#Readingalldatafromthedatabase)
	* 3.4. [Removing a datum from the database](#Removingadatumfromthedatabase)
	* 3.5. [Generating database in file](#Generatingdatabaseinfile)
	* 3.6. [Guide](#Guide)
* 4. [Example](#Example)
	* 4.1. [ Adding a datum to the database](#Addingadatumtothedatabase-1)
		* 4.1.1. [Success response](#Successresponse)
		* 4.1.2. [Error response](#Errorresponse)
	* 4.2. [Reading a datum from the database](#Readingadatumfromthedatabase-1)
		* 4.2.1. [Success response](#Successresponse-1)
		* 4.2.2. [Error response](#Errorresponse-1)
	* 4.3. [Removing a datum from the database](#Removingadatumfromthedatabase-1)
		* 4.3.1. [Success case](#Successcase)
		* 4.3.2. [Error case](#Errorcase)
	* 4.4. [Reading all data from the database](#Readingalldatafromthedatabase-1)
		* 4.4.1. [Success case](#Successcase-1)
		* 4.4.2. [Error case](#Errorcase-1)
	* 4.5. [Generating database in file](#Generatingdatabaseinfile-1)
		* 4.5.1. [Success case](#Successcase-1)
* 5. [Technology](#Technology)
* 6. [Contribution guide](#Contributionguide)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->
##  1. <a name='Features'></a>Features
* Add a datum to the database
* Read a datum from the database
* Read all data from the database
* Remove a datum from the database
* Generate database in file
* Guide to usage
##  2. <a name='Installation'></a>Installation
After you've created your project using `npm init`, go ahead and run:
 ```
 npm install custom-datastore
 ```
##  3. <a name='Usage'></a>Usage
After the successful installation from the previous section, head on to your app file and enter the following code:
```
const {database} = require('custom-datastore')
database()
```
 Then head on to the terminal and proceed to the usage below. Note that if there is space inbetween the value of the flag, you will need to wrap it in quote. Wrapping in single quote will fail on windows, but not on linux or OSX. So ensure you wrap with double quote when using windows. Using any of the command in each section below will work
###  3.1. <a name='Addingadatumtothedatabase'></a> Adding a datum to the database
`node app.js add --title title-of-data --body body-of-data`

`node app.js add --title "title of data" --body "body of data"`

`node app.js add --title=title-of-data --body=body-of-data`

`node app.js add --title="title of data" --body="body of data"`
###  3.2. <a name='Readingadatumfromthedatabase'></a>Reading a datum from the database
`node app.js read --title title-of-data`

`node app.js read --title "title of data"`

`node app.js read --title=title-of-data`

`node app.js read --title="title of data"`
###  3.3. <a name='Readingalldatafromthedatabase'></a>Reading all data from the database
`node app.js list`
###  3.4. <a name='Removingadatumfromthedatabase'></a>Removing a datum from the database
`node app.js remove --title title-of-data`

`node app.js remove --title "title of data"`

`node app.js remove --title=title-of-data`

`node app.js remove --title="title of data"`
###  3.5. <a name='Generatingdatabaseinfile'></a>Generating database in file
`node app.js generate --datastore name-of-datastore`

`node app.js generate --datastore "name of datastore"`

`node app.js generate --datastore=name-of-datastore`

`node app.js generate --datastore="name of datastore"`
###  3.6. <a name='Guide'></a>Guide
For general guidance including the available commands, and what each of the commands do, use the command:

`node app.js --help`

For guidance on the use of each command, including the option they take, use the command:

`node app.js [command] --help`
##  4. <a name='Example'></a>Example
###  4.1. <a name='Addingadatumtothedatabase-1'></a> Adding a datum to the database
####  4.1.1. <a name='Successresponse'></a>Success response
![d-add-success](https://user-images.githubusercontent.com/46408547/201300179-424b6d5e-0248-4367-b97c-50a579dff79d.JPG)
####  4.1.2. <a name='Errorresponse'></a>Error response
This error occurs when you try to add a data with an existing title to the database

![d-add-error](https://user-images.githubusercontent.com/46408547/201300565-95031d31-115a-41b9-84b7-2e40f4d580a4.JPG)
###  4.2. <a name='Readingadatumfromthedatabase-1'></a>Reading a datum from the database
####  4.2.1. <a name='Successresponse-1'></a>Success response
![d-read-success](https://user-images.githubusercontent.com/46408547/201300710-fcf3f19f-4513-4979-ad91-ed051a8d8dbb.JPG)
####  4.2.2. <a name='Errorresponse-1'></a>Error response
This error occurs when you try to read a datum that does not exist in the database.

![d-read-error](https://user-images.githubusercontent.com/46408547/201301109-6325effa-5698-4dca-8de6-b5fa092a1334.JPG)
###  4.3. <a name='Removingadatumfromthedatabase-1'></a>Removing a datum from the database
####  4.3.1. <a name='Successcase'></a>Success case
![d-remove-succes](https://user-images.githubusercontent.com/46408547/201301207-debfec95-ca1a-4e89-98fc-d90a30a38075.JPG)
####  4.3.2. <a name='Errorcase'></a>Error case
This error occurs when you try to remove a datum that does not exist in the database

![d-remove-error](https://user-images.githubusercontent.com/46408547/201301309-7c87d597-1245-46ed-8908-570e751947e7.JPG)
###  4.4. <a name='Readingalldatafromthedatabase-1'></a>Reading all data from the database
####  4.4.1. <a name='Successcase-1'></a>Success case
![d-list-success](https://user-images.githubusercontent.com/46408547/201301524-6c952a7b-de80-4227-9dab-56a5e7947abe.JPG)
####  4.4.2. <a name='Errorcase-1'></a>Error case
This error occurs when you try to read all data from an empty database

![d-list-error](https://user-images.githubusercontent.com/46408547/201301674-7de06a7c-c047-4716-bad5-b5ff745504a0.JPG)
###  4.5. <a name='Generatingdatabaseinfile-1'></a>Generating database in file
####  4.5.1. <a name='Successcase-1'></a>Success case
![d-generate](https://user-images.githubusercontent.com/46408547/201303025-ce6e79d5-3ec5-4841-b352-8293eecb4f7d.JPG)
##  5. <a name='Technology'></a>Technology
Node.js
##  6. <a name='Contributionguide'></a>Contribution guide
1. Open up a new issue, and describe the feature you want to contribute.
 
2. Fork this repository, then clone it to your local machine and open it in your editor of choice.

4. Create a new branch for your task, and add a descriptive branch name using the git command: `git checkout -b (branch name)`

5. After implementation, commit your changes with a descriptive commit message, the commit message should give an idea of the feature you worked on, use the git command: `git commit -m "commit message"`

6. Push changes to your forked repo with the new branch you created using the git command: `git push origin your-branch-name`

7. Create a pull request to the `develop` branch of this repository from your forked repo on github.
