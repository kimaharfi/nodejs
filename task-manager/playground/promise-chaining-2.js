require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('60f45f4cfd12e25601b2b3a9').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })


const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count;
}

deleteTaskAndCount('60f46fa32d92225fdf8976ed').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})