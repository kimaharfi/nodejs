const doWork = 
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 4, 7])
        reject('some error that wont be printed')
    }, 2000)
})

doWork.then((result) => {
    console.log('Success:',result)

}).catch((error)=> {
    console.log('Error:', error)

})


// 
// 
//+the promise executor call resolve    fulfilled
//                                    /
// promise        -- pending -->
//                                    \
//+the promise executor call reject     rejected
// 