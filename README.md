# MyVisitEmail-Backend

### Enviroment setup
* GIT
* Node.js

#### Ubuntu 14.04 LTS staging server configuration:
**GIT**
* sudo add-apt-repository ppa:git-core/ppa
* sudo apt-get update
* sudo apt-get install git


**Node.js**
* curl -sL https://deb.nodesource.com/setup | sudo bash -
* sudo apt-get install nodejs

#### Windows
All prerequisites can be downloaded and installed via exe installers from oficial sites.
* https://nodejs.org/en/
* https://git-scm.com/
Code is hosted on atlasian bitbucket to allow easier access on widows and MAC OS you can download source tree: from https://www.sourcetreeapp.com/

### Installation
To install all third party componnnets run npm install after checking out the develop branch

### Running the application:
* To run the app please use the compileAndRun script included in the package.json file: npm run compileAndRun
* To perform unit tests on the app run: npm test

### Endpoint status

#### User endpoint
User Entity:
* firstName
  type: String,
  required: true,
* lastName
	type: String,
	required: true,
* password
	type: String,
	required: true,
* isAdmin
	type: Boolean,
	required: true,
* eMail
	type: String,
	required: true
* avatarId
	type: ObjectId,
	required: true

* get / Gets all users from database
* post / Creates new user in the DB
	The data should look be an object, containing all of the required properties.
	eMail must be present in the create object otherwise it will resutl in an error.
* put /userId updates a previously created usser with data sent in the body
* delete /:userId deletes a user using its IDS
* post /login attempts to log in into the app using eMail and password.

#### Mailchimp endpoint
* get /list
	Get all mailing lists for mailchimp account
* get /list/:ID
	get a single list by List ID
* get /report
	Get a list of all reports for all campaigns
* get /campaign
	Get a list of campaigns
* get /automations
	Get a list of all automated campaigns
* post /list
	Create a new list
* put /list/:listId
	Update a list by id
* post /campaign
	Creates a new Campaign:
	exemple Campaign data:
	{"recipients":{"list_id":"3c307a9f3f"},"type":"regular","settings":{"subject_line":"Your Purchase Receipt","reply_to":"orders@mammothhouse.com","from_name":"Customer Service"}}
* patch /campaign/:campaignId
	Updates cmpaign by id:
	exmaple campaign data:
	{"recipients":{"list_id":"3c307a9f3f"},"type":"regular","settings":{"subject_line":"Your Purchase Receipt","reply_to":"orders@mammothhouse.com","from_name":"Customer Service"}}
* delete /campaign/:campaignId
	Deletes a campaign using campaignId
* post /campaign/:campaignId/:action
	Allows to perform an action On created campaign
	Main aim for this route is to schedule a campaign with schedule_time sent in requests body and action schedule
	For info on available actions visit: http://developer.mailchimp.com/documentation/mailchimp/reference/campaigns/# and select action tab.