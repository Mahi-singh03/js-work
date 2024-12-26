Modules
--
* A module in Node.jsis a reusable block of code whose existence does not impact other code unless explicitly imported.
* they hve to requreed in the code.

Types of module
--

 Modules in js are two types :  local and global


*  LOCAL MODULES

such  modules do not need to import

        console.log("hi")





* GLOBAL MODULES

Such modules are needed to be "require"

example are "fs" { file system module }

        const x = require("fs").writeFileSync;

        x("hi.txt", "hi ian manoj");
important node module
--
1) Nodemon
: this modules keep theproject running in the background so that you dont have to reload OR lunch the server again and again using the command :
 
            npm i nodemon -g

            nodemon.\name of file

    -g  intall this module globaly
    
    

