Connection.js
-

1. create a directory "Components" in the root directory.
2. cretet the "connection.js" inside the "Components" directory.
3. require "mongoose" in the connection.js
4. create a async function named "connect"
5. connect the nord.js with mongodb with the connecton string.
     
    

           mongodb+srv://MahiSingh:<password>@cluster0.ddxzk.mongodb.net/<database-name>?retryWrites=true&w=majority&appName=Cluster0

6. use the try and catch format to connect the database
7. export the connect function from the connection.js 

---------- 

-----------

Schema.js
--


*  A Schema is a blueprint or structure that defines the shape of the data in a MongoDB collection.
* t is used to define the fields in a document, the data types for each field, validation rules, default values, and other constraints.
---------


1. create the schema.js component
2. require the mongooose
3. create the schema with the syntex:

          const schema = new mongoose.Schema({
               name :{type : string, requires : true}
               email: { type: String, required: true },
               ....
               .....
          })

4. create a model with the syntex:

          const model = mongoose.model(<db collection name>,<schema>)

5. export the model



--------
---------
Validation.js
-
- A Model is a class that provides an interface for interacting with the documents in a MongoDB collection.
-  Once a Schema is defined, you create a Model from it.
- The Model is used to perform operations like creating, querying, updating, and deleting documents in the database.

----------

1. create the validation.js 
2. require body and valodationResult from the express.
3. create the validation with the syntex:

          const validation = [
               body('name').isLength({ min: 3, max: 20 }).withMessage('Name must be between 3 and 20 characters long')
                
                
               body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
               .......
               .......

          ]

4. export the validation.

