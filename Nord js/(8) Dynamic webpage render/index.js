const express = require('express')
const app = express()

// Set EJS as the template engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const data = { name: 'John', age: 30 , hobbies: ['reading', 'swimming', 'coding'] }
  res.render('index', data)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})