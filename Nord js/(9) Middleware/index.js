// // Application level middleware

// const express = require('express')
// const app = express()


// // Middleware function can be used to used to execute code before the server sends a response
// // let say you want to make a midelware that cheack the age input by the user if it is less than 18 it will not allow the user to access the page.



// // Middleware function
// const checkAge = (req, res, next) => {
//     const age = req.query.age
    
//     if(!age) {
//         res.send('Please provide your age')
//     }
//     else if (age < 18) {
//         res.send('You are not allowed to access this page')
//     } else if(age > 18) {
//         res.send('You are allowed to access this page') 
//     }
//     else {
//         next()
//     }
// }   


// // Use the middleware in the Application level
// app.use(checkAge)



// app.listen(3000, () => {    
//     console.log('Server is running on http://localhost:3000')
// })


// comand to run:
// localhost:3000/?age=20  // You are allowed to access this page
// localhost:3000/?age=15  // You are not allowed to access this page
// localhost:3000/         // Please provide your age











// route levl middleware


// using differnt middleware for different routes

// const express = require('express')
// const app = express()   

// const checkAge = (req, res, next) => {
//     const age = req.query.age
    
//     if(!age) {
//         res.send('Please provide your age')
//     }
//     else if (age < 18) {
//         res.send('You are not allowed to access this page')
//     } else if(age > 18) {
//         res.send('You are allowed to access this page') 
//     }
//     else {
//         next()
//     }
// }

// app.get('/', (req, res) => {   
//     res.send('Homepage')   
// })

// app.get('/Info', (req, res) => {    
//     res.send('Info page')
// })


// // Use the middleware in the route level
// app.get('/data', checkAge, (req, res) => {    
//     res.send('Data page')
// })


// app.listen(3000, () => {    
//     console.log('Server is running on http://localhost:3000')
// })












// using middleware in the route level for routes.js



// const express = require('express')
// const app = express()   
// const { checkAge } = require('./Routes/routes')
// // import { checkAge } from './Routes/routes'


// app.get('/', (req, res) => {   
//     res.send('Homepage')   
// })

// app.get('/Info', (req, res) => {    
//     res.send('Info page')
// })


// // Use the middleware in the route level
// app.get('/data', checkAge, (req, res) => {    
//     res.send('Data page')
// })


// app.listen(3000, () => {    
//     console.log('Server is running on http://localhost:3000')
// })

