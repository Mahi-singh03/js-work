const connect = require('./db functions/connection').connect;





// finding the data

// async function findData() { // function to find the data

//     const collection = await connect(); // calling the connect function

//     const data = await collection.find({name: "monjolica"}).toArray(); // fetching the data from the collection

//     console.log(data); // logging the data  
//     return data; // returning the data

// }

// findData(); // calling the function










// inserting the data

// async function insertData() { 
    
//     const collection = await connect(); // calling the connect function

//     // const data = await collection.insertOne({ name:"nimrat kher", age : 27, email:"nimo123@ggmail.com" }); // inserting  one data the data
//     const data = await collection.insertMany([{ name:"ravi", age : 27, email:"ravi123@ggmail.com" },{name:"mani", age : 27, email:"mani123@ggmail.com"}]); // inserting  one data the data
    
//     console.log(data); // logging the data
// }

// insertData()












//updating the data

// async function updateData() {
    
//     const collection = await connect(); // calling the connect function

//     const updatedData = await collection.updateOne({ name: "monjolica" }, { $set: { name: "Monjolica" } }); // updating the data

//     console.log(updatedData); // logging the data

// }

// updateData()










// deleting the data

// async function deleteData() {   
    
//     const collection = await connect(); // calling the connect function

//     const deletedData = await collection.deleteOne({ name: "ravi" }); // deleting the data

//     console.log(deletedData); // logging the data

// }

// deleteData()