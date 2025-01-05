mongostd commands for shell
--
- recomanded to begin in the mongo compass.
- use the mongo bd shell to use the commands.

commands :

1. show all databases

        show dbs

2. use database

        use Dtatbase-for-tutorial

3. Show Current Database:

        db

4. show collections

        show collections

5. Create a Collection:

        Dtatbase-for-tutorial.createCollection("std")

For all next command open the shell in the "Dtatbase-for-tutorial" database

6. Insert Documents

        std.insertOne({ name: "Manoj Barhpagga", age: 23, email : "aka.mahisingh@gmail.com" })

                    OR

       db.std.insertMany([{name:"monika devi", age:23, email: "monika.123@gmail.com"},{name:"monjolica", age : 1000, email:"monolica123@gmial.com" }])

7. Find all data of collection

        db.std.find({name:"monjolica"})


8. Find with a Condition

        std.find({ age: 25 })

9. Update One Document:

        db.std.updateOne({name:"monjolica" }, { $set: {age:2000}})

10. updating the multiple data of one document

        std.updateMany({name:"monjolica"},{ $set : {age : 30000 , email : "monjolica2000@gmail.com"}})

11. drope one document

        db.std.deleteOne({name : "manoj barhpagga"})

                OR

        db.std.deleteMany({age : 23})

                OR

        db.std.deleteMany({age :{$gt : 23} })


    - $gt stands for age greater then 23



