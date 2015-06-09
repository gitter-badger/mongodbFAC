# MongoDB

[![Join the chat at https://gitter.im/Lukars/mongodbFAC](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Lukars/mongodbFAC?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

##Why
###Why would you want to use MongoDB?
noSQL database so prevents SQL injections
Easy to scale 
Can handle diverse data types - the fields of the data do not need to be predefined as with SQL
JSON-like data structure - MongoDB documents map to object-orientated programming languages 
Lots of official drivers in various languages
Tolerant of incomplete information 
Provides atomic operations on a single document
Disadvantages of MongoDB
Poor query performance due to unstructured storage
No standard query syntax
Cannot perform multi-document transactions
Cannot support SQL joins (searching by comparing two tables)
What application areas is it suitable for?
Content Management
MongoDB can incorporate any type of data (tweets, photos, videos etc)
Internet of Things
New sensors are constantly created, meaning new data; MongoDB makes it easy to incorporate new data and iterate on your data model.
Robust authentication, authorisation, auditing and encryption controls protect valuable sensor data and the analytics delivered from it.
Who else is using it?
Forbes - custom CMS


##What
###What kind of Database is MongoDB?
NoSQL
SQL to MongoDB comparison
(http://docs.mongodb.org/manual/reference/sql-comparison/)
What databases is it similar to?
Redis
CouchDB



##How
###Data is being stored in Binary JSON (BSON):
MongoDB represents JSON documents in binary-encoded format called BSON behind the scenes. BSON extends the JSON model to provide additional data types() and to be efficient for encoding and decoding within different languages.


JSON Data Types	BSON Data Types	
Number	Double	
String	String	
Boolean	Object	
Array	Array	
Value	Binary data	
Object	Undefined	
Whitespace	Object id	
null	Boolean	
Date	
Null	
Regular Expression	
JavaScript	
Symbol	
JavaScript (with scope)	
32-bit integer	
Timestamp	
64-bit integer	
Min key	
Max key	

###Setting up
Install MongoDB using brew
(http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
brew update
brew install mongodb
//If there is an error, open a new terminal window and use sudo (sorry Nelson)://
sudo mkdir <username> <path causing the error>
sudo chown -R <username> <path causing the error>
Install the Client Driver for Node.js (node-mongodb-native)
(https://github.com/mongodb/node-mongodb-native)
//create a folder for your project and cd into it
npm install mongdb
npm init  
//this creates package.json file. Add "mongodb": "~2.0" as dependancy
npm install
Create a folder in your project for the data 
mkdir data
Start the MongoDB server
mongod --dbpath=./data --port 27017
Follow the rest of the instructions (from 'Connecting to MongoDB') on the github link for the node-mongodb-native module. This will take you through the various CRUD operations possible with MongoDB.

http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/
