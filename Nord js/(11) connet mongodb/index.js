const mongodb = require('mongodb');

const url = "mongodb+srv://MahiSingh:mahi2012@cluster0.ddxzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new mongodb.MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
      const database = client.db('Dtatbase-for-tutorial');
      const info = database.collection('std');
     
      const query = { name: 'monjolica' };
      const Student = await info.findOne(query);
      console.log(Student);
    } finally {
      
      await client.close();
    }
  
  
}


run().catch(console.dir);

