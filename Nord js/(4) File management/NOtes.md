Process
-----

The process object provides information about, and control over, the current Node.jsprocess. It is a global object, meaning it can be accessed from anywhere in your application.

1) process.argv

* it dont need to be require.
* it five two standered output : location of the node exe. and location of the file you are in.


Fs module
--

* this is the core module therfore it dont need to install.
* it needed to be require.
* different module object are;
    
        * fs.WriteFileSync('filenmae.txt','content of the file')
        * fs.UnlinkSybc('filename.txt')
        * fs.readFileSync('filename.txt')
        * fs.appendFileSync('filename')
    
        
        
        
Path module
--
* this module is needed to be require
* this gives the path of the directory
* different object in the path module:

       * path.joim(__dirname, 'name of the directory')


CURD   command
--

* CURD  stand for create, update, read and delete.
