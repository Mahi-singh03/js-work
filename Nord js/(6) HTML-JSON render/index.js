// example to render the HTML-JSON data

const express = require('express'); 
const app = express();

app.get('/', (req, res) => {    
    res.send(`<h1>Hello World</h1>`);
});

// res is used to send the respons to the client.
// req is request from the client and it can also be accepted using the adderss bar of the browser.

// EXAMPLE

app.get('/example', (req, res) => {
    res.send(`<h1>welsome ${req.query.name}</h1>`);  // req.query.name is used to get the query from the address bar of the browser.
});
// tye "?name=mahi" in the address bar of the browser after the url to see the output.



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});