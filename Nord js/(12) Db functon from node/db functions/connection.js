const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://MahiSingh:mahi2012@cluster0.ddxzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

 async function connect() {

        await client.connect(); // step 1 : connect to the mongodb as a client
       
        const database = client.db('Dtatbase-for-tutorial'); // step 2 : connect to the database

        const collection = database.collection('std'); // step 3 : connect to the collection

        // console.log(collection)  // this Console the whole collection
       
        return collection;  // step 4 : return the collection

        // this function will return  a promise

 }

module.exports = { connect } // exporting the function


   



