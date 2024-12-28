const express = require('express');
const path = require('path');


const dirpath = path.join(__dirname, 'public');


const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(dirpath, 'index.html')); // sendFile is used to send the file to the client.         
});

app.get('/about', (req, res) => {
    res.sendFile    (path.join(dirpath, 'about.html')); // sendFile is used to send the file to the client.     
}   );

app.get('/menu', (req, res) => {
    res.sendFile    (path.join(dirpath, 'menu.html')); // sendFile is used to send the file to the client.     
}   );

app.get('*', (req, res) => {
    res.sendFile    (path.join(dirpath, '404.html')); // sendFile is used to send the file to the client.     
}   );

app.listen(3000, () => {    // listen is used to listen to the port.
    console.log('Server is running on port 3000');
});