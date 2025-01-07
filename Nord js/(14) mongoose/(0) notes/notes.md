MOST MPORTANT
--

- different from the mongodb you have to initilize the database name in the connection string


starting with mongoose
--

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction over the native MongoDB driver, making it easier to work with MongoDB in a more structured and organized way.

Advantages of Mongoose over MongoDB Native Driver:

- Schema Definition:

    Mongoose allows you to define schemas for your data models, which helps enforce a structure on the documents within a collection. This is particularly useful for ensuring data consistency and validation.

- Validation:

    Mongoose provides built-in validation for schema fields, ensuring that the data being saved to the database meets certain criteria before it is actually stored.

- Middleware:

    Mongoose supports middleware (also known as pre and post hooks) that can be executed during various stages of the document lifecycle, such as before saving or after updating a document. This is useful for tasks like logging, validation, or modifying data before it is saved.

- Query Building:

    Mongoose provides a more intuitive and chainable query API, making it easier to build complex queries without having to write raw MongoDB queries.


- Population:

    Mongoose supports the concept of population, which allows you to reference documents in other collections and automatically replace the references with the actual documents when querying.

- Plugins:

    Mongoose has a rich ecosystem of plugins that can extend its functionality, such as adding support for pagination, soft deletes, or full-text search.




