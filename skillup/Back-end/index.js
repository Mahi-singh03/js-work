const express = require('express');
const { DataModel } = require('./Components/Users');
const connect = require('./Components/connection');
const { validationResult, validations_1, validations_2 } = require('./Components/validations');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database once
(async () => {
  try {
    await connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
})();

app.post("/SignUp", validations_1, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = new DataModel({ name, email, password: hashedPassword });
    await data.save();
    const token = data.generateToken();
    res.status(201).json({ token, username: data.name });
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ error: "Error saving data", details: err.message });
  }
});



app.post("/login", validations_2, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await DataModel.findOne({ email: new RegExp(`^${email}$`, 'i') });
    if (!user) {
      return res.status(401).json({ message: "Invalid email " });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = user.generateToken();
    res.json({ token, username: user.name });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Error logging in", details: error.message });
  }
});


app.listen(5000, () => {
  console.log('Server started on port 5000');
});
