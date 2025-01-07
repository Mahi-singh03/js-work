const express = require("express");
const mongoose_connection = require("./mongoose_functions/connection"); // Import the connection function
const { validations, validationResult } = require("./mongoose_functions/validations"); // Import validations
const mongoose = require("mongoose");

mongoose_connection(); // Connect to the database once when the app starts

const app = express();
app.use(express.json());

// Define the schema
const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
}, {
  versionKey: false // Disable `__v` field
});

// Define the model
const DataModel = mongoose.model('Dtatbase-for-tutorial', dataSchema, 'std');

// GET API - Retrieve all data
app.get("/", async (req, res) => {
  try {
    const data = await DataModel.find();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).send("Error retrieving data");
  }
});

// POST API - Add new data
app.post("/", validations, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data = new DataModel(req.body);
  try {
    await data.save();
    console.warn("Data is saved");
    res.status(201).send("Data saved successfully");
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).send("Error saving data");
  }
});

// PUT API - Update data by name
app.put("/", async (req, res) => {
  const filter = { name: req.body.name };
  const update = { 
    age: req.body.age, 
    email: req.body.email 
  };

  try {
    const updatedData = await DataModel.updateOne(filter, { $set: update });

    if (updatedData.matchedCount === 0) {
      return res.status(404).send("Data not found to update");
    }

    console.warn("Data is updated");
    res.status(200).send("Data updated successfully");
  } catch (err) {
    console.error("Error updating data:", err);
    res.status(500).send("Error updating data");
  }
});

// DELETE API - Delete data by name
app.delete("/", async (req, res) => {
  const filter = { name: req.body.name };

  try {
    const deletedData = await DataModel.deleteOne(filter);

    if (deletedData.deletedCount === 0) {
      return res.status(404).send("Data not found to delete");
    }

    console.warn("Data is deleted");
    res.status(200).send("Data deleted successfully");
  } catch (err) {
    console.error("Error deleting data:", err);
    res.status(500).send("Error deleting data");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
