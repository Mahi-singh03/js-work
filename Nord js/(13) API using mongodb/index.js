const express = require('express');
const connect = require('./db functions/connection').connect;

const app = express(); // create an instance of express






// get API

// get API method to fetch data from the database


// app.get('/', async (req, res) => {
//     const collection = await connect(); // connect to the database and get the collection

//     const data = await collection.find().toArray(); // fetching the data from the collection
//     console.log(data); // logging the data
    
//     res.send(data);
// });










//post API

// post API method to insert data into the database
// let say yoy want to get data from the user and insert it into the database
// the data you entered is comming from frontend
// since now we dont have frontend we will use postman to insert the data


// app.use(express.json()) // to parse the data comming from the frontend

// app.post('/', async (req, res) => {
    
//     const data_from_frontend = req.body; // data comming from the frontend
//     console.log(data_from_frontend); // logging the data comming from the frontend

//     // at this step the data you entered is comming from frontend is shown in the terinal
//     // now you have to insert this data into the database

//     const collection = await connect(); // connect to the database and get the collection

//     const data = await collection.insertOne(data_from_frontend); // inserting the data into the collection

//     console.log(data); // logging the data
//     res.send(data); // sending the data to the frontend


// })
    








// put API

// put API method to update data in the database
// let say you want to update the data in the database
// the data you want to update is comming from frontend
// since now we dont have frontend we will use postman to update the data


// app.use(express.json()); // to parse the data coming from the frontend


// app.put('/', async (req, res) => {
//     const data_from_frontend = req.body; // data coming from the frontend
//     console.log(data_from_frontend); // logging the data coming from the frontend

//     const collection = await connect(); // connect to the database and get the collection



//     const updatedData = await collection.updateOne(
//         { name: data_from_frontend.name }, // filter
//         { $set: data_from_frontend } // update
//     );
//     // this method use the name to identify the data to be updated
//     // what if we want to update name itself
//     // foe that we put param in the put request 
//     // app.put('/:name', async (req, res) => {})
//     //  use :   name: req.paramas.name

//     // localhost:3000/?name=monjolica


//     console.log(updatedData); // logging the updated data
//     res.send(updatedData); // sending the updated data as response
// });








// delete API
// delete API method to delete data from the database
// let say you want to delete the data from the database
// the data you want to delete is comming from frontend
// since now we dont have frontend we will use postman to delete the data

app.use(express.json()); // to parse the data coming from the frontend

app.delete('/', async (req, res) => {
    const data_from_frontend = req.body; // data coming from the frontend
    console.log(data_from_frontend); // logging the data coming from the frontend

    const collection = await connect(); // connect to the database and get the collection

    const deletedData = await collection.deleteOne(data_from_frontend); // deleting the data from the collection

    console.log(deletedData); // logging the deleted data
    res.send(deletedData); // sending the deleted data as response
})





app.listen(3000, () => {
    console.log('Server is running on port 3000');
});