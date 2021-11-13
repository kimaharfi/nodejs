//create the express app and run

const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async() => {
    // const task = await Task.findById('60f6cd3742a35917b46665e6')
    // await task.populate('owner').execPopulate()
    // console.log(task)
 
    // const user = await User.findById('60f6ca2fad335c16953ad70f')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)


}

main()
