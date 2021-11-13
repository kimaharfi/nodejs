
// CRUD operation - create read update delete

//npm library - native driver created by mongodb company for connecting mongoDB DB from nodejs
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

//generate uid
const id = ObjectId();

console.log(id.getTimestamp())
console.log(id.toString())
console.log(id.id)

//connect to specific server
//useNewUrlParser to parse the url correctly to connect to the server
//connetcting to the DB is not synchronic operation!
//the callback will be ivoke when the connect operation is complete
//it can fail or seccess - error message or connection
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    //connect to specific DB - asynchronic
    const db = client.db(databaseName)

    //insert one user
    // db.collection('users').insertOne({
    //     _id: id,    
    //     name: 'Vladi',
    //         age: 29
    //     },(error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.insertedId)
    // })

    //insert many users
    // db.collection('users').insertMany([
    //     {
    //         name: 'Izik',
    //         age: 28
    //     },
    //     {
    //         name: 'Nadav',
    //         age: 22
    //     }
    // ],(err,res) => {
    //     if(err){
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(res.insertedIds)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Eat',
    //         completed: true
    //     },
    //     {
    //         description: 'MongoDB section',
    //         completed: false
    //     },
    //     {
    //         description: 'Sum up last section',
    //         completed: false
    //     }
    // ], (err, res) => {
    //     if(err){
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(res.insertedIds)
    // })
})