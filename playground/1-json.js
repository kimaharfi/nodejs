const fs = require('fs')
// const book = {
//     title: 'Book name',
//     author: ' author name'
// }

// const bookJSON = JSON.stringify(book)

// console.log(bookJSON)
// //bookJSON.title is undefined

// // const parsedData = JSON.parse(bookJSON)//original object
// // console.log(parsedData.title)
// fs.writeFileSync('2-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('2-json.json')// convert json to data in bytes
// const dataJSON = dataBuffer.toString()//convet to string

// const data = JSON.parse(dataJSON)//parse string into object

// console.log(data.title)



const personBuffer = fs.readFileSync('1-json.json');
const personJSON = personBuffer.toString();

const personObject = JSON.parse(personJSON)
personObject.name = 'Kim'
personObject.age = 25;

const userJSON = JSON.stringify(personObject)
fs.writeFileSync('1-json.json',userJSON)
