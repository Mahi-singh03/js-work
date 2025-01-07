// const mongoose = require('mongoose');

// async function connect() {  // this function will connect to the
//   try {
//     await mongoose.connect('mongodb+srv://MahiSingh:mahi2012@cluster0.ddxzk.mongodb.net/Dtatbase-for-tutorial?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to the database');

    // const validation = new mongoose.Schema({  // this is the schema and the validation. now we can use this schema to validate the data before inserting it into the database now we cannot insert the data without the name, age and email or we can say that the name, age and email are the required fields. and also we cannot nsert dats otheer than the name, age and email.
    //     name: String,
    //     age: Number,
    //     // email: String
    // })


//     // model is the class that will create the object of the schema

//     const studentModel = mongoose.model('Dtatbase-for-tutorial', validation, 'std');  // this is the model that will create the object of the schema. and the object of the schema will be used to insert the data into the database. and the student is the name of the collection in the database.

//     const data = new studentModel({  // this is the object of the schema that will be used to insert the data into the database.
//         name: 'Nimo',
//         age: 21,
//         email: 12
//         // email: 'nimo098@gmil.com'
//     })

//     let r = await data.save();
//     console.log('Data saved:', r);
//   } catch (err) {
//     console.error('Error:', err);
//   } finally {
//     // Close the connection
//     mongoose.connection.close();
//   }
// }

// connect()  // this will call the function connect() and connect to the database






















// curd operation in the mongoose






// view the database

// we use the get api
// foe this par we dont need the mongoose 
// we use the coneection.js from db connection to connect to teh mongodb

// const connect = require('./db functions/connection').connect;
// const express = require('express');

// const app = express()


// app.get('/', async (req, res) => {
//     const collection = await connect(); // connect to the database and get the collection

//     const data = await collection.find().toArray(); // fetching the data from the collection
//     console.log(data); // logging the data
    
//     res.send(data);
// });







// add new document to the database



const express = require("express")
const mongoose_connection = require("./mongose functions/conection").connect
const validation = require("./mongose functions/validtauion").validations
 
const app = express()


app.post("/",(req, res)=>{

})
app.listen(3000, ()=>{
  console.warn("the server s running at loclhost:3000")
})