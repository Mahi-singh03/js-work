App.js
=================

1. require the express from express
2. initiate the express app
3. listen the app at any port 

--------
--------

Post API
-
1. require the "connect" from the connection.js
2. require the "validation" from validaton.js
3. create the post API
4. make the API async, use the "valdation" function  as callback function in the post API function
5. pass the incoming request in the "ValidationResult" function to validate
6. call the "connect" function for connection awith await keyword 
7. use if condition to cheack for the error in the validation returen the validation
8. pass the body of the requset in the the model for cheacking of the schema and save that request in variable {i.e Data}
9.  use "Data.save()" to save the data and return the "201" status.
