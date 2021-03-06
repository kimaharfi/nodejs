
/***********************!IMPORTANT EXAMPLE!******************************* */

// console.log('Starting..')

setTimeout(() => {
    console.log('2 Second Timer')
}, 2000)
// setTimeout(() => {
//     console.log('0  Second Timer')
// }, 0)


// console.log('Stopping..')

const names = ['Kim','Izik','Mai']
const shortName = names.filter((name) => {
    return name.length <= 3;
})


const geocode = (address, callback) => {
    setTimeout(()=>{
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    },2000)
}

geocode('Phuladelphia', (data) => {
    console.log(data)
})

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a,b,callback) => {
    setTimeout(() => {
        callback(a + b)
    },2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

/*********************CALLBACK VS PROMISES******************** */

const doWork = (callback) => {
    setTimeout(() => {
        callback('some error',undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWork((error, result) => {
    if (error) {
        return console.log('Error:', error)
    }

    console.log(result)
});