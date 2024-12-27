JSON
--

* JSON stands for javascript object notation. 
* JSON is often used for transmitting data in web applications between a server and a client. 
* it is language-independent, meaning it can be used with many different programming languages.



Creating the package.json file
--

* you can create the packege.json using the command
  
        npm init

* " packege.json "  file is creted. but it contail onlt basic name and version of the all module you use in the project
* " package-lock.json " contain all the detals of installed module but in more detail.


Package.json in NORD.js
--

* package.json is the most important part of the NORD project
* It serves several important purposes, including managing the project's dependencies, scripts, versioning, and metadata, modules, versions of module.
* using the data of modules u use in the project. anyone can install all the packeges of project with a single command:

        npm install



Git Push
-

* to stop the dependencies to get pushed to the git u can crete the file nemed as"

        .gitignore
* add the name f the files you dont want to  pusht to the git as:

        /node_modules
        