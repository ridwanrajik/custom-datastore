<!-- vscode-markdown-toc -->
# custom-datastore
A database system application. House the database collection in a customized datastore in JSON format. It accepts inputs from the user via the command-line argument, parse it, and process it by either generating a database in the datastore, removing, or retrieving a particular datum or set of data.
## Table of content
* 1. [Features](#Features)
* 2. [Getting started](#Gettingstarted)
* 3. [Usage](#Usage)
	* 3.1. [ Adding a datum to the database](#Addingadatumtothedatabase)
	* 3.2. [Reading a datum from the database](#Readingadatumfromthedatabase)
	* 3.3. [Reading all data from the database](#Readingalldatafromthedatabase)
	* 3.4. [Removing a datum from the database](#Removingadatumfromthedatabase)
	* 3.5. [Guide](#Guide)
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
* Guide to usage
##  2. <a name='Gettingstarted'></a>Getting started
You can fork this repository, then clone it to your local machine and open it in your preferred editor.

Run `npm install` to install the dependencies.
##  3. <a name='Usage'></a>Usage
After the sucessful installation from the previous section, head on to the terminal and navigate to the root directory of the file you cloned. Then you can proceed to the usage below. Note that if there is space inbetween the value of the flag, you will need to wrap it in quote. Wrapping in single quote will fail on windows, but not on linux or OSX. So ensure you wrap with double quote when using windows. Using any of the command in each section below will work
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
###  3.5. <a name='Guide'></a>Guide
For general guidance including the available commands, and what each of the commands do, use the command:

`node app.js --help`

For guidance on the use of each command, including the option they take, use the command:

`node app.js [command] --help`
##  4. <a name='Example'></a>Example
###  4.1. <a name='Addingadatumtothedatabase-1'></a> Adding a datum to the database
####  4.1.1. <a name='Successresponse'></a>Success response
![dadd-success](https://user-images.githubusercontent.com/46408547/198370608-e4dffbbd-8e5d-4e6b-b9e1-b6e883a10a58.JPG)
####  4.1.2. <a name='Errorresponse'></a>Error response
This error occurs when you try to add a data with an existing title to the database

![dadd-error](https://user-images.githubusercontent.com/46408547/198370855-60551806-04d0-4913-862e-fdeac484820c.JPG)
###  4.2. <a name='Readingadatumfromthedatabase-1'></a>Reading a datum from the database
####  4.2.1. <a name='Successresponse-1'></a>Success response
![dread-success](https://user-images.githubusercontent.com/46408547/198497577-5013e970-7629-4e30-b2ff-1134a7051b6d.JPG)
####  4.2.2. <a name='Errorresponse-1'></a>Error response
This error occurs when you try to read a datum that does not exist in the database.

![dread-error](https://user-images.githubusercontent.com/46408547/198500679-4257b10d-4c81-421b-bdee-e0fd5a397f07.JPG)
###  4.3. <a name='Removingadatumfromthedatabase-1'></a>Removing a datum from the database
####  4.3.1. <a name='Successcase'></a>Success case
![dremove-success](https://user-images.githubusercontent.com/46408547/198501059-53bc96c7-8c45-4e87-b02d-6a81238b7448.JPG)
####  4.3.2. <a name='Errorcase'></a>Error case
This error occurs when you try to remove a datum that does not exist in the database

![dremove-error](https://user-images.githubusercontent.com/46408547/198501354-3eb05ca3-231a-42bb-8c0d-a348a28e20bc.JPG)
###  4.4. <a name='Readingalldatafromthedatabase-1'></a>Reading all data from the database
####  4.4.1. <a name='Successcase-1'></a>Success case
![dlist-success](https://user-images.githubusercontent.com/46408547/198501679-cb02edf4-e775-46c1-a8a7-af2600ad95a4.JPG)
####  4.4.2. <a name='Errorcase-1'></a>Error case
This error occurs when you try to read all data from an empty database

![dremove-error](https://user-images.githubusercontent.com/46408547/198565531-01a76fbe-e341-4cc1-b452-68ad1a842991.JPG)
##  5. <a name='Technology'></a>Technology
Node.js
##  6. <a name='Contributionguide'></a>Contribution guide
1. Open up a new issue, and describe the feature you want to contribute.
 
2. Fork this repository, then clone it to your local machine and open it in your preferred editor.

4. Create a new branch for your task, and add a descriptive branch name using the git command: `git checkout -b (branch name)`

5. After implementation, commit your changes with a descriptive commit message, the commit message should give an idea of the feature you worked on, use the git command: `git commit -m "commit message"`

6. Push changes to your forked repo with the new branch you created using the git command: `git push origin your-branch-name`

7. Create a pull request to the `develop` branch of this repository from your forked repo on github.
