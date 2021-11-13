const https = require('https')
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2ltYWhhcmZpIiwiYSI6ImNrcjNqbTQ0cjBydG8zMXB0dW55Zzc0eXoifQ.nOtrbYPl8vDvDddsWrBinQ&limit=1'

const request =  https.request(url,(response) => {
    let data = ''
     response.on('data', (chunk) => {
        data += chunk.toString()
     })

     response.on('end', () => {
         const body = JSON.parse(data)
         console.log(body)
     })
 })

 request.on('error', (error)=> {
     console.log('We have a problem:',error)
 })

 request.end();