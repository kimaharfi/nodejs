// CRUD operation - create read update delete

//npm library - native driver created by mongodb company for connecting mongoDB DB from nodejs
const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


//connect to specific server
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    //connect to specific DB - asynchronic
    const db = client.db(databaseName)

    //read

    // db.collection('users').findOne({ _id: new ObjectId('60f40f870080b052b2a428e4') }, (error, user) => {
    //     if (error) {
    //         console.log('Unable to fetch')
    //     }
    //     if(!user)
    //         return console.log('user not found')
    //     console.log(user)
    // })

    // //return a cursor back not objects
    // db.collection('users').find({age:28}).toArray((err,users) =>{
    //     console.log(users)
    // })


    // db.collection('users').find({ age: 28 }).count((err, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: ObjectId('60f4157963fd21f7d07211ef') }, (error, task) =>
    // {
    //     if (error) {
    //         console.log('Unable to fetch')
    //     }
    //     if (!task)
    //         return console.log('task not found')
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((err, tasks) => {
    //     console.log(tasks)
    // })

//update

//    db.collection('users').updateOne({
//         _id: new ObjectId('60f4279e8fae13d19f1bb406')
//     },
//     {
//         $set :{
//             age:29
//         }
//     }).then((result) =>{
//         console.log(result)

//     }).catch((error) => {
//         console.log('Error: ',error)
//     })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },
    // {
    //     $set:{
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.matchedCount)
    // }).catch((error) => {
    //     console.log('Error:',error)
    // })

    //delete

    // db.collection('users').deleteMany({
    //     age: 28
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
        
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'MongoDB section'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {

        console.log(error)
    }) 



})

