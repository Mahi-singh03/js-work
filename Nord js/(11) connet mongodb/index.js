// this template is taken from the official mongodb documentation

const mongodb = require('mongodb');

const url = "mongodb+srv://MahiSingh:mahi2012@cluster0.ddxzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new mongodb.MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });



// we use the async function to connect the database and get the data from the database because it takes some time to connect the database and get the data from the database so we use the async function to get the data from the database


// Asynchronous function :
// An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.

async function run() {
  try {
      // Connect to the database
      const database = client.db('Dtatbase-for-tutorial');  
      const collection = database.collection('std');              

      // Define the query
      const query = { name: 'monjolica' };                  

      // Execute the query
      const Student = await collection.findOne(query);

      // Log the result
      console.log(Student);
  } finally {
      // Close the database connection
      await client.close();
  }
}

// Call the function and handle errors
run().catch(console.dir);

